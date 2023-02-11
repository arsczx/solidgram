import React from 'react';
import { Link } from 'react-router-dom';
import Actions from '../actions/Actions';
import Comment from '../comment/Comment';
import Header from '../header/Header';
import css from './Post.module.css';

function Post(props) {
  return (
    <div className={css.wrapper}>
          <Header author={props.author} avatar={props.avatar}/>
        <Link to={`/post/${props.id}`} className={css.image}>
            <img 
              src={props.image} 
              alt="" 
            />
        </Link>
        <Actions like={props.like}/>
        <div>Info</div>
        <div className={css.comments}>
          <b>Комментарии:</b>
          {
            props.comments.map((item) => <Comment key={item.id} {...item}/>)
          }
        </div>
    </div>
  )
}

export default Post;