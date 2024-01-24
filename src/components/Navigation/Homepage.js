import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Welcome to Phonebook!</h1>
      <div style={menuContainerStyle}>
        <Link to="/login" style={menuItemStyle}>
          <button style={buttonStyle}>Login</button>
        </Link>
        <Link to="/registration" style={menuItemStyle}>
          <button style={buttonStyle}>Register</button>
        </Link>
      </div>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '400px',
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

const menuContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
};

const menuItemStyle = {
  textDecoration: 'none',
};

const buttonStyle = {
  width: '150px',
  padding: '10px',
  borderRadius: '5px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

export default HomePage;
