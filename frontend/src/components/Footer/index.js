import { Link } from 'react-router-dom';
import style from './Footer.module.css'

function Footer(){
    return(
        <footer className={style.footer_container}>
            <div className={style.footer}>
                <div>
                    <h3>Contato</h3>
                    <ul>
                        <li><Link to='/'>Suporte</Link></li>
                        <li><Link to='/'>Devkriger@gmail.com</Link></li>
                        <li><Link to='/'>(33) 99857-3352</Link></li>
                        <li><Link to='/'>FAQ</Link></li>
                    </ul>
                </div>

                <div>
                    <h3>Institucional</h3>
                    <ul>
                        <li><Link to='/'>Sobre</Link></li>  
                        <li><Link to='/'>Termos de serviço</Link></li>
                        <li><Link to='/'>Política de privacidade</Link></li>
                        <li><Link to='/'>Aviso legal</Link></li> 
                    </ul>
                </div>

                <div>
                    <h3>Rede Social</h3>
                    <ul>
                        <li>
                            <Link to='/'>
                                <i class="fa-brands fa-instagram"></i>
                                Instagram
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to='/'>
                                <i class="fa-brands fa-whatsapp"></i>
                                whatsapp
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to='/'>
                                <i class="fa-brands fa-x-twitter"></i>
                                Twitter
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={style.mark}>
                <h3>Copyright © 2024 - Kriger Store. Todo os direitos reservados</h3>
            </div>
        </footer>
    );
}

export default Footer;