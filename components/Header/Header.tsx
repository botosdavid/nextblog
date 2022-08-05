import { NextPage } from 'next';
import Link from 'next/link'
import styles from './Header.module.css';

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
            <button className={styles.button}>Login</button>
            </div>
        </div>
    )
}



export default Header;