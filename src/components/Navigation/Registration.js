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
    <div style={containerStyle}>
      <h2 style={titleStyle}>Registration</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label style={labelStyle}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </label>
        <label style={labelStyle}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
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
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </label>
        <button type="submit" style={buttonStyleGreen}>
          Register
        </button>
      </form>
      <button style={buttonStyle} onClick={() => navigate('/login')}>
        Go to Login
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
  width: '400px',
  margin: '0 auto',
  padding: '8px',
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
  width: '90%',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  fontSize: '16px',
};

const buttonStyleGreen = {
  width: '90%',
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

const buttonStyle = {
  width: '70%',
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

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '500px',
  margin: '0 auto',
}

export default RegisterPage;
