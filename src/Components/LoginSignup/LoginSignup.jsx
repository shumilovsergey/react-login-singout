import React, { useState } from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignup = () => {

    const [action, setAction]=useState("sign up")
    const [user, setUser]=useState("")
    const [email, setEmail]=useState("")
    const [passord, setPassword]=useState("")

    const [userDirty, setUserDirty]=useState(false)
    const [emailDirty, setEmailDirty]=useState(false)
    const [passwordDirty, setPasswordDirty]=useState(false)
    
    const [userError, setUserError]=useState("Введите имя!")
    const [emailError, setEmailError]=useState("Введите емэил!")
    const [passwordError, setPasswordError]=useState("Введите пароль!")

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'user':
                setUserDirty(true)
                break
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

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
            {(userDirty && userError) && <div className='validEror'>{userError}</div>}
            <input onBlur={e => blurHandler(e)} name="user" type="text" placeholder='user' className="" />
        </div>}

            <div className="input">
                <img src={email_icon} alt="" className="" />
                {(emailDirty && emailError) && <div className='validEror'>{emailError}</div>}
                <input onBlur={e => blurHandler(e)} name="email" type="email" placeholder='email' className="" />
            </div>

            <div className="input">
                <img src={password_icon} alt="" className="" />
                {(passwordDirty && passwordError) && <div className='validEror'>{passwordError}</div>}
                <input onBlur={e => blurHandler(e)} name="password" type="passord" placeholder='password' className="" />
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

