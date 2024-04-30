import { Link } from 'react-router-dom';
import styles from './Header.module.css'

function Header(){
    return(
        <header className={styles.header}>
            <div>
                <Link to='/'>
                    <span>High</span>
                </Link>
                <Link to='/'>Coleção</Link>
                <Link to='/'>Acessórios</Link>
                <Link to='/'>Roupas</Link>
            </div>
            <nav>
                <Link to='/'>Lista de desejo</Link>
                <Link to='/'>Entrar</Link>
                <Link to='/'>Carrinho</Link>
            </nav>
        </header>
    );
}

export default Header;