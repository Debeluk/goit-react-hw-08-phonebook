import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://connections-api.herokuapp.com/users/login', {
        email,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('email', response.data.user.email);
        navigate('/contacts');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
      <button onClick={() => navigate('/registration')}>Go to registration</button>
      <button onClick={() => navigate('/')}>Go back</button>
    </div>
  );
};

export default LoginPage;
