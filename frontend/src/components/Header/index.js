import { Link } from 'react-router-dom';
import styles from './Header.module.css'
import Search from '../Search';
import { useState } from 'react';

function Header(){

    const [showdiv, setshow] = useState('none');

    const toggle = () => {
        if (showdiv === 'none'){
            setshow('')
        } else if (showdiv === ''){
            setshow('none')
        }
    };

    return(
        <header className={styles.header_container}>
            <div className={styles.header}>
                <div>
                    <Link to='/'>
                        <span>Store</span>
                    </Link>
                </div>
                <nav>
                    <Search/>
                    <Link to='/'><i class="fa-regular fa-heart"></i></Link>
                    <Link to='/'><i class="fa-solid fa-user"></i></Link>
                    <Link to='/'><i class="fa-solid fa-cart-shopping"></i></Link>
                    <button
                    type='button'
                    onClick={toggle}
                    className={styles.bottom}>
                        <i class="fa-solid fa-bars"></i>
                    </button>
                </nav>
            </div>

            <div 
            className={styles.mobile}
            style={{display:showdiv}}>
                <div className={styles.mobile_header}>
                    <i class="fa-solid fa-user"></i>
                    <h2>
                        <Link to='/'>Iniciar sessão</Link>
                        ou 
                        <Link to='/'>Criar uma conta</Link>
                    </h2>
                    <button
                    type='button'
                    onClick={toggle}>
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <ul>
                    <li><Link to='/'>Coleção</Link></li>
                    <li><Link to='/'>Acessórios</Link></li>
                    <li><Link to='/'>Roupas Masculinas</Link></li>
                    <li><Link to='/'>Roupas Femininas</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;