import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infocontainer}>
                <h1 className={styles.title}>Next Blog &#8482;</h1>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro minus sed sequi animi quibusdam voluptatibus expedita itaque repudiandae labore modi inventore quae doloremque molestiae tempore doloribus, iusto sint dignissimos corrupti!</h5>
            </div>
        </div>
    )
}

export default Footer;