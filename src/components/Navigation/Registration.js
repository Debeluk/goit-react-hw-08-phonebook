import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const RegisterPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/users/signup',
        formData
      );

      if (response.status === 201) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('email', response.data.user.email);
        navigate('/contacts');
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Register</button>
      </form>
      <button onClick={() => navigate('/login')}>Go to Login</button>
      <button onClick={() => navigate('/')}>Go back</button>
    </div>
  );
};

export default RegisterPage;
