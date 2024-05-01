import { useState } from 'react';
import styles from './Search.module.css'

function Search(){

    const [searchtext, setsearch] = useState('')
    return(
        <section className={styles.search}>
            <input
            type='search'
            placeholder='Pesquisar'
            value={searchtext}
            onChange={(event) => setsearch(event.target.value)}/>
            <button>
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
        </section>
    );
}

export default Search;