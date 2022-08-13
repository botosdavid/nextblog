import { GetServerSideProps } from 'next';
import Postlist from '../components/Postlist/Postlist';
import styles from '../styles/ProfilePage.module.css';
import { GET_USER_POSTS } from '../utils/queries';
import { options } from './api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth';
import { client } from './_app';
import { ComplexSession, Post } from '../utils/types';

interface ProfilePageProps {
  posts: Post[],
  usersession: ComplexSession
}

const ProfilePage = ({posts, usersession}: ProfilePageProps) => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        { posts ?
          <div className={styles.usercontainer}>
            <div className={styles.userinfocontainer}>
              <img src={usersession?.user?.image ?? ''} className={styles.userimage}/>
              <h1 className={styles.username}>{usersession?.user?.name}</h1>
              <h3 className={styles.useremail}>{usersession?.user?.email}</h3>
            </div>
            <Postlist posts={posts}/>
          </div>
          : 
          <div>Login to see your Profile!</div>
        }
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps =  async (context) => {
  const session: any = await unstable_getServerSession(context.req, context.res, options);
  if(!session) {
    return {
      props: {
        usersession: session,
      }
    }
  }
  const { data } = await client.query({
    query: GET_USER_POSTS, 
    variables: { id: session?.user?.id }
  });
  return {
    props: {
      posts: data.getUserPosts,
      usersession: session,
    }
  }
}

export default ProfilePage;