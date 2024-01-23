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
    <div>
      <p>{email}</p>
      <button onClick={logOut}>Logout</button>
    </div>
  );
};

export default UserMenu;
