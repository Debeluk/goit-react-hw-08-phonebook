import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigator = () => {
  return (
    <nav>
      <ul>
        <li>
            <h1>Test</h1>
          <NavLink to="/login" activeClassName="active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/registration" activeClassName="active">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts" activeClassName="active">
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;
