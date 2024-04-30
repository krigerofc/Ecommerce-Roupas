import { Link } from 'react-router-dom';
import styles from './Header.module.css'

function Header(){
    return(
        <header className={styles.header}>
            <div>
                <Link to='/'>
                    <span>Store</span>
                </Link>
                <Link to='/'>Coleção</Link>
                <Link to='/'>Acessórios</Link>
                <Link to='/'>Roupas</Link>
            </div>
            <nav>
                <Link to='/'><i class="fa-regular fa-heart"></i></Link>
                <Link to='/'><i class="fa-solid fa-user"></i></Link>
                <Link to='/'><i class="fa-solid fa-cart-shopping"></i></Link>
            </nav>
        </header>
    );
}

export default Header;