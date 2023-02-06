import React, { useState } from 'react'
import Input from '../../components/input/Input'
import classes from './LoginPage.module.css'
import logo from './../../assets/Solidgram.png'
import logo_fb from '../../assets/facebook.png'
import logo_app from '../../assets/appstore.png'
import logo_google from '../../assets/googleplay.png'


function LoginPage(props) {

    const handlerClick = (event, inputValue, setInputValue) => {
        if (<Input /> === (setInputValue)) {
            setInputValue('')
            alert('Финиш!')
        } else {
            alert('Пройдите полнотью вход')
        }
    }

    return (
        <div>
            <form className={classes.form}>
                <img className={classes.sg_logo} src={logo} alt="" />
                <Input type="text" placeholder="Имя пользователя" />
                <Input type="password" placeholder="Пароль" />
                <button className='btn' onClick={handlerClick}>Войти</button>
                <div className={classes.lines_box}>
                    <div className={classes.line_1}></div>
                    <div className={classes.or_box}>ИЛИ</div>
                    <div className={classes.line_2}></div>
                </div>
                <div className={classes.box_fb}>
                    <img src={logo_fb} className={classes.fb_logo} alt="" />
                    <a className={classes.fb_link} href="https://ru-ru.facebook.com/">Войти через Facebook</a>
                </div>
            </form>
            <div className={classes.register}>
                <p className={classes.r_txt}>У вас ещё нет аккаунта? <a className={classes.r_link} href="">Зарегистрироваться</a></p>
            </div>
            <div className={classes.dw_box}>
                <p className={classes.dw_txt}>Установите приложение.</p>
                <div>
                    <a href="https://www.apple.com/ru/app-store/"> <img src={logo_app} className={classes.logo_app} alt=""/> </a>
                    <a href="https://play.google.com/store/games?hl=ru&gl=US&pli=1"> <img src={logo_google} className={classes.logo_google} alt="" /> </a>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
