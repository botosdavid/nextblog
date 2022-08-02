import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useReducer } from 'react';
import { ADD_POST } from '../../utils/queries';
import styles from './Postinput.module.css';
import {PostInputActionType} from '../../utils/types';
import type { PostInput, PostInputAction } from '../../utils/types';

const initialState: PostInput = {
    title: '',
    description: '',
    image: ''
}

const reducer = (state: PostInput , action: PostInputAction) => {
    switch(action.type) {
        case PostInputActionType.TYPE_TITLE:
            return {...state, title: action.payload }
        case PostInputActionType.TYPE_DESCRIPTION:
            return {...state, description: action.payload }
        case PostInputActionType.TYPE_IMAGE:
            return {...state, image: action.payload }
        case PostInputActionType.RESET:
            return initialState;
        default: return state;
    }
}

const Postinput = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [addPost] = useMutation(ADD_POST);
    const router = useRouter();

    const refetch = () => {
        router.replace(router.asPath);
    }

    const handleAddPost = async () => {
        await addPost({
            variables: {
                title: state.title,
                description: state.description,
                image: state.image
            },
        });
        refetch();
        dispatch({ 
            type: PostInputActionType.RESET, 
            payload: ''
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
                    placeholder=" Post Title" 
                    value={state.title} 
                    onChange={(e) => 
                        dispatch({
                            type: PostInputActionType.TYPE_TITLE,
                            payload: e.target.value 
                        })
                    }
                />
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
                    onChange={(e) => 
                        dispatch({ 
                            type: PostInputActionType.TYPE_IMAGE, 
                            payload: e.target.value 
                        })
                    }
                />
            }
      </div>
    )
}

export default Postinput;