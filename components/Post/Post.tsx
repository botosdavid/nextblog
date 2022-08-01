import styles from './Post.module.css';
import { Post } from '../../pages/index';
import Link from 'next/link';

const defaultPostImage = 'https://media.istockphoto.com/photos/writing-a-blog-blogger-influencer-reading-text-on-screen-picture-id1198931639?k=20&m=1198931639&s=612x612&w=0&h=1OjzKK3oXsuHkX9Fhro-e_fU-aSgCaV4swBai80HLx0='

interface PostProps { 
    post: Post;
}

const Post = ({ post }: PostProps) => {
    return (
        <Link href={`/${post.title}`}>
            <div className={styles.container}>
                <img src={defaultPostImage} className={styles.postimage}/>
                <div className={styles.postinfocontainer}>
                    <h3>{post?.title}</h3>
                    <p>{post?.description}</p>
                    <button className={styles.postbutton}>Read more</button>
                </div>
            </div>
        </Link>
    )
}

export default Post;