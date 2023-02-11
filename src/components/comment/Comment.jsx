import React from 'react'
import css from './Comment.module.css'

function Comment({author, comment, likes, createdAt}) {
    const date = new Date(createdAt).toLocaleDateString()
  return (
    <div className={css.wrapper}>
        <div className={css.header}>
            <p className={css.nick}>{author}</p>
            {" "}
            <p className={css.txt}>{comment}</p>
        </div>
        <div className={css.footer}>
            <div>Нравится: {likes}</div>
            <div>{date}</div>
        </div>
    </div>
  )
}

export default Comment