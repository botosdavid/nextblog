import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useReducer } from 'react';
import { ADD_POST } from '../../utils/queries';
import styles from './Postinput.module.css';
import {Category, PostInputActionType} from '../../utils/types';
import type { PostInput, PostInputAction } from '../../utils/types';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useSession } from 'next-auth/react';

const isValidImage = (url: string) => {
   return (url.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi) !== null);
}

const initialState: PostInput = {
    title: '',
    description: '',
    image: '',
    category: Category.SPORT,
}

const reducer = (state: PostInput , action: PostInputAction) => {
    switch(action.type) {
        case PostInputActionType.TYPE_TITLE:
            return {...state, title: action.payload }
        case PostInputActionType.TYPE_DESCRIPTION:
            return {...state, description: action.payload }
        case PostInputActionType.TYPE_IMAGE:
            return {...state, image: action.payload }
        case PostInputActionType.TYPE_CATEGORY:
            return {...state, category: action.payload as Category }
        case PostInputActionType.RESET:
            return initialState;
        default: return state;
    }
}

const Postinput = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [addPost] = useMutation(ADD_POST);
    const router = useRouter();
    const { data: session } = useSession();

    const refetch = () => {
        router.replace(router.asPath);
    }

    const handleAddPost = async () => {
        await addPost({
            variables: {
                title: state.title,
                description: state.description,
                image: state.image,
                category: state.category
            },
        });
        refetch();
        dispatch({ 
            type: PostInputActionType.RESET, 
            payload: '',
        })
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.titlecontainer}>
                <button onClick={handleAddPost} 
                    className={styles.button} 
                    disabled={!state.description}>
                    Post
                </button>
                <input className={styles.titleinput}
                    disabled={!session}
                    placeholder={session ? " Post Title" : ' Login to Post'}
                    value={state.title} 
                    onChange={(e) => 
                        dispatch({
                            type: PostInputActionType.TYPE_TITLE,
                            payload: e.target.value 
                        })
                    }
                />
                <Select value={state.category} label={state.category}
                    style={{height: '2rem', borderRadius: '1rem', fontSize: '0.7rem'}}
                    onChange={(e) => dispatch({ 
                        type: PostInputActionType.TYPE_CATEGORY,
                        payload: e.target.value
                    })}>
                    { Object.values(Category).map((key) => (
                        <MenuItem style={{fontSize: '0.7rem'}} 
                            value={key} key={key}>{key}
                        </MenuItem>
                    ))}
                </Select>
            </div>
            {state.title && 
                <textarea className={styles.textarea}
                    placeholder=" Start writing.."
                    value={state.description}
                    onChange={(e) => 
                        dispatch({ 
                            type: PostInputActionType.TYPE_DESCRIPTION, 
                            payload: e.target.value
                        })
                    }
                />
            }
            {state.title && state.description &&
                <input className={styles.titleinput} 
                    placeholder=' Image Url'
                    value={state.image}
                    onChange={(e) => 
                        dispatch({ 
                            type: PostInputActionType.TYPE_IMAGE, 
                            payload: e.target.value 
                        })
                    }
                />
            }
            {state.image && isValidImage(state.image) && 
                <img src={state.image} className={styles.imageupload}/>
            }
      </div>
    )
}

export default Postinput;