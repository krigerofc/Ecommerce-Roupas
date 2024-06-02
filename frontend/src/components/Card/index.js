import styles from './Card.module.css'

function Card( {id, name, price, url} ){
    return(
        <div className={styles.card}>
            <img src={url} alt='roupas'/>
            <section>
            <h4>{name}</h4>
            <p>Por: R${price}</p>
            <button>Comprar</button>
            </section>
        </div>
    );
}

export default Card;