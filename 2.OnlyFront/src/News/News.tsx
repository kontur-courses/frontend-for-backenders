import * as React from 'react';
import './styles.css';
import cow from './cow.jpg';


function News() {
    return (
        <section className='newsContent'>
            <h1>Новости</h1>
            <p>В нашем городе ничего не происходит. Посмотрите лучше на коровку:</p>
            <img alt="plush cow" src={cow}/>
        </section>
    )
}

export default News;
