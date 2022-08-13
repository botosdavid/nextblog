import { ReactNode } from 'react';
import Link from 'next/link'
import styles from './Header.module.css';
import { signIn, signOut } from "next-auth/react";
import  { FiTag, FiUser, FiMail } from 'react-icons/fi';
import { HomeProps } from '../../pages/index';
import { ComplexSession } from '../../utils/types';

const Header = ({usersession}: HomeProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.infocontainer}>
                <Link href='/'>
                    <h3 className={styles.logo}>Next Blog</h3>
                </Link>
                <nav className={styles.nav}>
                    <MenuItem Icon={<FiTag />} link='price' label='Price' />
                    <MenuItem Icon={<FiUser />} link='profile' label='Profile' />
                    <MenuItem Icon={<FiMail />} link='contact' label='Contact' />
                </nav>
                <div className={styles.userinfobuttoncontainer}>
                    { usersession && 
                    <div className={styles.userinfocontainer}>
                        <img src={usersession?.user?.image || ''} 
                            referrerPolicy="no-referrer" 
                            className={styles.userimage}
                        />
                        <div className={styles.userinfos}>
                            <h5 className={styles.username}>{usersession?.user?.name}</h5>
                            <h6 className={styles.useremail}>{usersession?.user?.email}</h6>
                        </div>
                    </div> }
                    <ButtonAuth session={usersession} />
                </div>
            </div>
        </div>
    )
}

interface MenuItemProps {
    Icon: ReactNode,
    link: string,
    label: string
}

const MenuItem = ({Icon, link, label}: MenuItemProps) => {
    return (
        <Link href={`/${link}`}>
            <div className={styles.menuitem}>
                <p className={styles.menuitemlabel}>{label}</p>
                {Icon}
            </div>
        </Link>
    )
}

interface ButtonProps {
    session: ComplexSession
}

const ButtonAuth = ({ session }: ButtonProps) => {
    if(session)
    return <button onClick={() => signOut()} className={styles.button}>LogOut</button>
    return <button onClick={() => signIn()} className={styles.button}>LogIn</button>
}

export default Header;