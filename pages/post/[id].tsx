import { GetServerSideProps } from 'next';
import styles from '../../styles/PostPage.module.css';
import { GET_POST } from '../../utils/queries';
import { Post } from '../../utils/types';
import { client } from '../_app';
import TimeAgo from 'react-timeago';

const defaultPostImage = 'https://media.istockphoto.com/photos/writing-a-blog-blogger-influencer-reading-text-on-screen-picture-id1198931639?k=20&m=1198931639&s=612x612&w=0&h=1OjzKK3oXsuHkX9Fhro-e_fU-aSgCaV4swBai80HLx0='

interface PostPageProps {
    post: Post
} 

const PostPage = ({ post }: PostPageProps) => {
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <img src={post.image || defaultPostImage} className={styles.image}/>
                <div className={styles.infocontainer}>
                    <h2 className={styles.title}>{post.title}</h2>
                    <b><small>Category:</small> {post.category}</b>
                    <p className={styles.description}>{post.description}</p>
                    <TimeAgo date={post.createdAt} />
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query;
    const post = await client.query({
        query: GET_POST, 
        variables: { id }
    });
    return { 
        props: {
            post: post.data.getPost
        }
    }
}

export default PostPage;