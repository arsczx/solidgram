import React from 'react';
import css from './Post.module.css';

function Post() {
  return (
    <div className={css.wrapper}>
        <div>Header</div>
        <div className={css.image}>
            <img src="https://cdn.britannica.com/34/212134-050-A7289400/Lionel-Messi-2018.jpg" alt="" />
        </div>
        <div>Actions</div>
        <div>Info</div>
    </div>
  )
}

export default Post;