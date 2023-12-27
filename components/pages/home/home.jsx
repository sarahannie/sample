import React from 'react';
import style from './home.module.css';
import Image from 'next/image';

const Home = () => {
  return (
    <div className={style.header}>
    
        <div className={style.header2}>
        <Image className={style.imgbody} width={1000} height={300} src="/image/clip.png" alt="logo" />  
        </div>
        <div>
        <Image className={style.img} width={200} height={300} src="/image/bluelogo.png" alt="logo" />
        <div className={style.container}>
            <div className={style.cont}> 
          
                <div className={style.login}><a href="/login">Login</a></div>
            </div>
            <div className={style.cont2}>
                <div className={style.register}>Register</div>
            </div>
        </div>
        </div>
        
</div>
  )
}

export default Home