import React from 'react'
import css from './Recomendation.module.css'

function Recomendation(props) {
    return (
        <div className={css.recomendation}>
            <img className={css.avatar} src={props.avatar} alt="" />
            <div>       
                <p className={css.nick}>{props.author}</p>
                <span>Рекомендации для вас</span>
            </div>
            <button>Подписаться</button>
        </div>
    )
}

export default Recomendation