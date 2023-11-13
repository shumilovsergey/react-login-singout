import React, { useState } from 'react';
import axios from 'axios';

const Gpt = () => {
    const [formData, setFormData] = useState({
      user: '',
      email: '',
      password: '',
    });
  
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const validateForm = () => {
      const errors = {};
  
      // Validate username
      if (formData.username.trim().length === 0) {
        errors.username = 'Username is required';
      }
  
      // Validate email
      if (!formData.email.includes('@')) {
        errors.email = 'Invalid email address';
      }
  
      // Validate password
      if (formData.password.length < 6) {
        errors.password = 'Password must be at least 6 characters long';
      }
  
      setErrors(errors);
      return Object.keys(errors).length === 0; // Return true if there are no errors
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
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
          {errors.username && <div className="error">{errors.username}</div>}
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <div className="error">{errors.email}</div>}
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <div className="error">{errors.password}</div>}
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    );
  };
  
export default Gpt