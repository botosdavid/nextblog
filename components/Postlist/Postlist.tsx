import styles from './Postlist.module.css';
import Post from "../Post/Post";
import { Post as PostType} from '../../utils/types';
import { useAutoAnimate } from '@formkit/auto-animate/react';

interface PostlistProps {
    posts: PostType[];
}

const Postlist = ({posts}: PostlistProps) => {
    const [postList] = useAutoAnimate<HTMLDivElement>();
    return (
        <div ref={postList} className={styles.postscontainer}>
          {posts?.map((post: PostType, index: number) => (
            <Post post={post} key={index}/>
          ))}
        </div>
    )
}

export default Postlist;