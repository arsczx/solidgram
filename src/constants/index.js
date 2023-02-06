import home from './../assets/home.png'
import search from './../assets/search.png'
import compass from './../assets/compass.png'
import reels from './../assets/reels.png'
import chat from './../assets/messenger.png'
import heart from './../assets/heart.png'
import create from './../assets/create.png'
import user from './../assets/user.png'


export const sideBarElements = [
    {
        title: "Главаная",
        icon: home, 
        to: "/",       
    },
    {
        title: "Поисковый запрос",
        icon: search, 
        to: "/#",       
    },
    {
        title: "Интересное",
        icon: compass, 
        to: "/interesting",       
    },
    {
        title: "Reels",
        icon: reels, 
        to: "/reels",       
    },
    {
        title: "Сообщения",
        icon: chat, 
        to: "/chat",       
    },
    {
        title: "Уведомления",
        icon: chat, 
        to: "/reels",       
    },
    {
        title: "Создать",
        icon: create, 
        to: "/reels",       
    },
    {
        title: "Профиль",
        icon: user, 
        to: "/reels",       
    },
    
];