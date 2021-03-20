import * as React from 'react';
import './styles.css';


function Currency() {
    return (
        <section className='currencyContent'>
            <h1>Стоимость валют</h1>
            <p>Доллар: 30р</p>
            <p>Евро: 40р</p>
            <p><small><i>Валюта обновляется ежедневно, руками наших журналистов</i></small></p>
        </section>
    )
}

export default Currency;
