import React from 'react'
import css from './Storis.module.css'

function Storis(props) {
    return (
        <div className={css.wrapper}>
            <div className={css.storis}>
                <img className={css.avatar} src={props.avatar} alt="" />
                <p className={css.nick}>{props.author}</p>
            </div>
        </div>
    )
}

export default Storis