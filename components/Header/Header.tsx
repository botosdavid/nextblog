import { NextPage } from 'next';
import Link from 'next/link'
import styles from './Header.module.css';
import { useSession, signIn, signOut } from "next-auth/react";


const Header: NextPage = () => {
    const { data: session } = useSession();
    return (
        <div className={styles.container}>
            <div className={styles.infocontainer}>
                <h3>Next Blog</h3>
                <nav className={styles.nav}>
                    <Link href='/about'>About</Link>
                    <Link href='/categories'>Categories</Link>
                    <Link href='/pricing'>Pricing</Link>
                </nav>
                <div className={styles.userinfobuttoncontainer}>
                    { session && 
                    <div className={styles.userinfocontainer}>
                        <img src={session?.user?.image || ''} className={styles.userimage}/>

                        <div className={styles.userinfos}>
                            <h5 className={styles.username}>{session?.user?.name}</h5>
                            <h6 className={styles.useremail}>{session?.user?.email}</h6>
                        </div>
                    </div> }
                    <ButtonAuth />
                </div>
                
                
            </div>
        </div>
    )
}

const ButtonAuth = () => {
    const { data: session } = useSession();
    if(session)
    return <button onClick={() => signOut()} className={styles.button}>LogOut</button>
    return <button onClick={() => signIn()} className={styles.button}>LogIn</button>
}

export default Header;