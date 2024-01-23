import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './Navigation/Login';
import RegisterPage from './Navigation/Registration';
import PrivatePhonebook from './Navigation/PrivatePhonebook';
import HomePage from './Navigation/Homepage';

const App = () => {
  return (
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegisterPage />} />
          <Route path="/contacts" element={<PrivatePhonebook />} />
        </Routes>
  );
};

export default App;
