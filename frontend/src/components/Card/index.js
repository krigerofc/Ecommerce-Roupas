import styles from './Card.module.css'

function Card( {id} ){
    return(
        <div className={styles.card}>
            <img src={id} alt='roupas'/>
            <section>
            <h4>Vestido Vermelho de teste para a loja</h4>
            <p>Por: R$120,00</p>
            <button>Comprar</button>
            </section>
        </div>
    );
}

export default Card;