import styles from './Bottom.module.css'

function Bottom(){
    return(
        <>
        <div className={styles.promo}>Frete grátis a partir de R$120</div>
        <div className={styles.bottom}>

            <h2>Kriger Store</h2>
            <p>Roupas e acessórios</p>
            <p>20% OFF</p>
        </div>
        </>
    );
}

export default Bottom;