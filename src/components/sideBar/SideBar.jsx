import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import css from './SideBar.module.css'
import logo_sd from './../../assets/Solidgram.png'
import { sideBarElements } from '../../constants'

const CustomLink = (props) => {

  const location = useLocation()

  return (
    <Link className={`${css.link} ${location.pathname === props.to ? css.active : ""}`} to={props.to}>
      <img src={props.icon} alt="Home" />
      {props.title}
    </Link>
  )
}

function SideBar() {

  const render = sideBarElements.map((el) => (
    <CustomLink key={el.title} {...el}/>
  ));

  return (
    <aside className={css.wrapper}>
      <img className={css.logo_sd} src={logo_sd} alt="" />
      {render}
      {/* <CustomLink to='/' title="Главная" src="https://cdn-icons-png.flaticon.com/512/3793/3793883.png"/>*/}
    </aside>
  );
}

export default SideBar;