import { Link } from 'react-router-dom';
import styles from './Banner.module.css'

function Banner(){
    return(
        <Link to='/'>
            <section className={styles.banner}>
            </section>
        </Link>
    );
}

export default Banner;