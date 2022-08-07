import { NextPage } from 'next';
import Link from 'next/link'
import styles from './Header.module.css';
import { useSession, signIn, signOut } from "next-auth/react";


const Header: NextPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infocontainer}>
                <h3>Next Blog</h3>
                <nav className={styles.nav}>
                    <Link href='/about'>About</Link>
                    <Link href='/categories'>Categories</Link>
                    <Link href='/pricing'>Pricing</Link>
                </nav>
                <ButtonAuth />
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