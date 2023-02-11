import React from 'react'
import css from './Header.module.css'

function Header(props) {
  return (
    <div className={css.info}>
        <img className={css.avatar} src={props.avatar} alt="" />
        <p className={css.title}>{props.author}</p>
    </div>
  )
}

export default Header