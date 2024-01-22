import React from 'react';

const UserMenu = ({ email }) => {
  return (
    <div>
      <p>{email}</p>
      <button>Logout</button>
    </div>
  );
};

export default UserMenu;
