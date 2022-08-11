import styles from './Footer.module.css';
import  { 
    AiFillTwitterCircle, 
    AiFillYoutube, 
    AiFillFacebook, 
    AiFillInstagram 
} from 'react-icons/ai';


const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infocontainer}>
                <h1 className={styles.title}>Next Blog &#8482;</h1>
                <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro minus sed sequi animi quibusdam voluptatibus expedita itaque repudiandae labore modi inventore quae doloremque molestiae tempore doloribus, iusto sint dignissimos corrupti!</h5>
                <div className={styles.iconscontainer}>
                    <AiFillTwitterCircle className={styles.icon}/>
                    <AiFillYoutube className={styles.icon}/>
                    <AiFillFacebook className={styles.icon}/>
                    <AiFillInstagram className={styles.icon}/>
                </div>
            </div>
        </div>
    )
}

export default Footer;