import React, { useState } from 'react';
import axios from 'axios';
import './Gpt.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import error_icon from '../Assets/error_3.png'

const Gpt = () => {
    const [formData, setFormData] = useState({
      user: '',
      email: '',
      password: '',
    });

    const [action, setAction]=useState("sign up")
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const validateForm = () => {
      const errors = {};
      const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


  
      // Validate form fields

      // Validate email user
      if (formData.user.length === 0) {
        errors.user = 'введите имя';

      }
  
      // Validate email
      if (!re.test(String(formData.email).toLowerCase())) {
        errors.email = 'плохой емеил';
      }
  
      // Validate password
      if (formData.password.length < 4) {
        errors.password = 'короткий пароль';
      }
  
      setErrors(errors);
      return Object.keys(errors).length === 0;
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (validateForm()) {
        try {
          const response = await axios.post('http://localhost:8080/signup', formData);
          console.log('Signup successful:', response.data);
        } catch (error) {
          console.error('Signup failed:', error);
        }
      } else {
        console.log('Form validation failed');
      }
    };
  
    return (
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
          
        <form onSubmit={handleSubmit} className='inputs'>
          <div className="input">
            <img src={errors.user?error_icon:user_icon} alt="" className="" />
            <input type="text" name="user" value={formData.user} placeholder= "имя пользователя" onChange={handleChange} />
          </div>


          <div className="input">
            <img src={errors.email?error_icon:email_icon} alt="" className="" />
            <input type="text" name="email" value={formData.email} placeholder= "адрес почты" onChange={handleChange} />
          </div>


          <div className="input">
            <img src={errors.password?error_icon:password_icon} alt="" className="" />
            <input type="password" name="password" value={formData.password} placeholder= "пароль" onChange={handleChange} />
          </div>

          <div className="forgot-password">
            lost password?
            <span> click here!</span>
          </div>

          <div className="submit-container">
          <button className='submit' type="submit">sing up</button>
          </div>
          
        </form>
      </div>
    );
  };
  
export default Gpt