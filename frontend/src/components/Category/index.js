import styles from './Category.module.css'

function Category( {Category, children} ){
    return(
        <section className={styles.category}>
            <h2>{Category}</h2>
            <section>
                {children}
            </section>
        </section>
    );
}

export default Category;