import styles from './Post.module.css';
import { Post } from '../../utils/types';
import Link from 'next/link';
import TimeAgo from 'react-timeago';

const defaultPostImage = 'https://media.istockphoto.com/photos/writing-a-blog-blogger-influencer-reading-text-on-screen-picture-id1198931639?k=20&m=1198931639&s=612x612&w=0&h=1OjzKK3oXsuHkX9Fhro-e_fU-aSgCaV4swBai80HLx0='

interface PostProps { 
    post: Post;
}

const Post = ({ post }: PostProps) => {
    const createdAt = new Date(post.createdAt);
    return (
        <Link href={`/post/${post._id}`}>
            <div className={styles.container}>
                <img src={post?.image || defaultPostImage} className={styles.postimage}/>
                <div className={styles.postinfocontainer}>
                    <div className={styles.postheader}>
                        <h3 className={styles.title}>{post?.title}</h3>
                        <TimeAgo date={post.createdAt} className={styles.timeago} />
                    </div>
                    <p className={styles.description}>{post?.description}</p>
                    <button className={styles.postbutton}>Read more</button>
                </div>
            </div>
        </Link>
    )
}

export default Post;

