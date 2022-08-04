import Link from "next/link";
import styles from '../styles/404.module.css';

const NotFoundPage = () => {
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <h1 className={styles.h1}>404</h1>
                <h3 className={styles.h3}>Page Not Found</h3>
                    <Link href='/'>
                        <p className={styles.link}>
                            Go back to Home Page
                        </p>
                    </Link>
            </div>
        </div>
    )
}

export default NotFoundPage;