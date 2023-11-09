import React, { useState } from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignup = () => {

    const [action, setAction]=useState("sign up");

  return (
    <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>

        <div className="inputs">
            {action==="login"?<div></div>:
            <div className="input">
            <img src={user_icon} alt="" className="" />
            <input type="text" placeholder='name' className="" />
        </div>}

            <div className="input">
                <img src={email_icon} alt="" className="" />
                <input type="email" placeholder='email' className="" />
            </div>

            <div className="input">
                <img src={password_icon} alt="" className="" />
                <input type="passord" placeholder='password' className="" />
            </div>
        </div>

        {action==="login"?<div></div>:
        <div className="forgot-password">
            lost password?
            <span> click here!</span>
        </div>}

        <div className="submit-container">
            <div className={
                action==="login"?"submit gray":"submit"
            } onClick={()=>(setAction("sign up"))}>sign up</div>

            <div className={
                action==="sign up"?"submit gray":"submit"
            } onClick={()=>(setAction("login"))}>login</div>
        </div>
    </div>
  )
}

export default LoginSignup

