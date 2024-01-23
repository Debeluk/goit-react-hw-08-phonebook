import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/users/login',
        {
          email,
          password,
        }
      );

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
    <div style={containerStyle}>
      <h2 style={titleStyle}>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </label>
        <label style={labelStyle}>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </label>
        <button type="submit" style={buttonStyleGreen}>
          Login
        </button>
      </form>
      <button style={buttonStyle} onClick={() => navigate('/registration')}>
        Go to registration
      </button>
      <button style={buttonStyle} onClick={() => navigate('/')}>
        Go back
      </button>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '500px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid gray',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
};

const titleStyle = {
  fontSize: '40px',
  marginBottom: '20px',
  textAlign: 'center',
};

const labelStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginBottom: '10px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  fontSize: '16px',
};

const buttonStyle = {
  width: '50%',
  padding: '10px',
  borderRadius: '5px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  fontSize: '16px',
  marginTop: '10px',
};

const buttonStyleGreen = {
  width: '100%',
  padding: '10px',
  borderRadius: '5px',
  backgroundColor: 'green',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  fontSize: '16px',
  marginTop: '10px',
};

export default LoginPage;
