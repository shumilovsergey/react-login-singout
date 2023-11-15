import React, { useState } from 'react';
import axios from 'axios';

import './Login.css'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import error_icon from '../Assets/error_3.png'



const Login = () => {
    const [formData, setFormData] = useState({
        user: '',
        email: '',
        password: '',
      });
  
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
      
        // Validate email
        if (!re.test(String(formData.email).toLowerCase())) {
          errors.email = 'плохой емеил';
        }
    
        // Validate password
        if (formData.password.length < 1) {
          errors.password = 'короткий пароль';
        }
    
        setErrors(errors);
        return Object.keys(errors).length === 0;
      };
      

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (validateForm()) {
          try {
            const response = await axios.post('http://localhost:8080/login', formData);
            console.log('Login successful:', response.data);
            const allHeaders = response.headers;
            console.log('All headers:', allHeaders);
            const myCookie = response.headers.get('Authorization');
            console.log('Specific cookie:', myCookie);

          } catch (error) {
            console.error('Login failed:', error);
          }
        } else {
          console.log('Form validation failed');
        }
      };
    
      return (
        <div className="container">
          <div className="header">
            <div className="underline"></div>
          </div>
            
          <form onSubmit={handleSubmit} className='inputs'>
  
            <div className="input">
              <img src={errors.email?error_icon:email_icon} alt="" className="" />
              <input type="text" name="email" value={formData.email} placeholder= "адрес почты" onChange={handleChange} />
            </div>
  
  
            <div className="input">
              <img src={errors.password?error_icon:password_icon} alt="" className="" />
              <input type="password" name="password" value={formData.password} placeholder= "пароль" onChange={handleChange} />
            </div>
  
            <div className="submit-container">
            <button className='submit' type="submit">login</button>
            </div>
            
          </form>
        </div>
    );
}

export default Login