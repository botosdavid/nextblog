import { GetServerSideProps } from 'next';
import Postlist from '../components/Postlist/Postlist';
import styles from '../styles/ProfilePage.module.css';
import { GET_POSTS } from '../utils/queries';
import { options } from './api/auth/[...nextauth]';
import { Session, unstable_getServerSession } from 'next-auth';
import { client } from './_app';
import { Post } from '../utils/types';

interface ProfilePageProps {
    posts: Post[],
    usersession: Session
}

const ProfilePage = ({posts}: ProfilePageProps) => {
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <Postlist posts={posts}/>
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps =  async (context) => {
    const { data } = await client.query({query: GET_POSTS});
    const session = await unstable_getServerSession(context.req, context.res, options);
    return {
      props: {
        posts: data.getPosts,
        usersession: session,
      }
    }
  }

export default ProfilePage;