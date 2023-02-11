import React from 'react'
import css from './Actions.module.css'
import heart from './../../assets/heart.png'
import commit from './../../assets/commit.png'
import send from './../../assets/send.png'

function Actions(props) {
  return (
    <div className={css.container}>
      <div className={css.actions}>
        <img src={heart} alt="" />
        <img className={css.commit} src={commit} alt="" />
        <img src={send} alt="" />
      </div>
      <div className={css.like}>
        <p> Нравится {props.like}</p>
      </div>
    </div>
  )
}

export default Actions