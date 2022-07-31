import styles from './Post.module.css';
import { Post } from '../../pages/index';
import Link from 'next/link';

interface PostProps { 
    post: Post;
}

const Post = ({ post }: PostProps) => {
    return (
        <Link href={`/${post.title}`}>
            <div className={styles.container}>
                <h3>{post.title}</h3>
                <p>{post?.description}</p>
            </div>
        </Link>
    )
}

export default Post;