import React, { useEffect, useState } from 'react'
import Post from '../../components/post/Post'
import Recomendation from '../../components/recomendation/Recomendation'
import SideBar from '../../components/sideBar/SideBar'
import Storis from '../../components/storis/Storis'
import style from './HomePage.module.css'

function HomePage(props) {

  const [posts, setPosts] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://63e4e7558e1ed4ccf6e8bfae.mockapi.io/api/posts')
      .finally(() => setLoading(false))
      .then((res) => res.json())
      .then((data) => setPosts(data))
  }, [])

  if(isLoading) return <h1>...Загрузка</h1>

  return (
    <div className='pageContainer'>
      <SideBar />
      <div className={style.content}>
        <div className={style.innerContent}>
          <div className={style.storis}>
            {
              posts.map((item) => <Storis key={item.id} {...item}/>)
            }
          </div>
          <div className={style.posts}>
            {
              posts.map((item) => <Post key={item.id} {...item}/> )
            }
          </div>
        </div>
        <div className={style.recomendation}>
          {
            posts.map((item) => <Recomendation key={item.id} {...item}/>) 
          }   
        </div>
      </div>
    </div>
  )
}

export default HomePage