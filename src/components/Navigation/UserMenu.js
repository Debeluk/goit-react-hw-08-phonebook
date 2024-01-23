import React from 'react';
import { API_URL } from './consts/ApiUrl';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserMenu = () => {
  const navigate = useNavigate();
  
  const logOut = async event => {
    event.preventDefault();

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${API_URL}/users/logout`,{}, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        localStorage.removeItem('token');
        navigate('/');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const email = localStorage.getItem('email');

  return (
    <div style={containerStyle}>
      <p style={emailStyle}>{email}</p>
      <button style={logoutButtonStyle} onClick={logOut}>Logout</button>
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

const emailStyle = {
  fontSize: '20px',
  marginBottom: '10px',
};

const logoutButtonStyle = {
  backgroundColor: 'red',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  padding: '10px 20px',
  cursor: 'pointer',
  fontSize: '16px',
};

export default UserMenu;
