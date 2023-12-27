import React from 'react';
import style from './login.module.css';

const Login = () => {
  return (
    <div className={style.header}>
    <div className={style.container}>
        <img className={style.img} src="/image/bluelogo.png" />
        <div className={style.contextHeader}>Welcome Back</div>
        <div className={style.emailCon}>
            <div className={style.email}>Enter your email</div>
        </div>
        <div className={style.emailCon}>
            <div className={style.email}>Enter your password</div>
        </div>
        
       
        
    </div>
</div>
  )
}

export default Login