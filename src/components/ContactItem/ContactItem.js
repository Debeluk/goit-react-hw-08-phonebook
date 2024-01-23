import React from 'react';

const ContactItem = ({ name, number, onDelete }) => (
  <li>
    {name}: {number}
    <button onClick={onDelete} style={deleteButtonStyle}>Delete</button>
  </li>
);

const deleteButtonStyle = {
  backgroundColor: 'red',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  padding: '5px 10px',
  cursor: 'pointer',
  marginLeft: '10px',
};

export default ContactItem;