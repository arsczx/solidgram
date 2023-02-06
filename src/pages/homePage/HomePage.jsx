import React from 'react'
import Post from '../../components/post/Post'
import SideBar from '../../components/sideBar/SideBar'
import style from './HomePage.module.css'

const CustomInfa = (props) => {
  
}

function HomePage() {
  return (
    <div className='pageContainer'>
      <SideBar />
      <div className={style.content}>
        <div className={style.innerContent}>
          <div className={style.storis}>Storis</div>
          <div className={style.posts}>
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
        <div className={style.recomendation}>Recomendation</div>
      </div>
    </div>
  )
}

export default HomePage