import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const {
    items: contacts,
    isLoading,
    error,
  } = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  if (isLoading) {
    return (
      <div style={containerStyle}>
        <p>Loading contacts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={containerStyle}>
        <p>An error occurred: {error}</p>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <ul style={ulStyle}>
        {visibleContacts.map(contact => (
          <li key={contact.id} style={liStyle}>
            <ContactItem
              name={contact.name}
              number={contact.number}
              onDelete={() => dispatch(deleteContact(contact.id))}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '500px',
  margin: '0',
  padding: '0px',
  border: '1px solid gray',
  borderTop: 'none',
  borderRadius: '0 0 10px 10px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
};

const ulStyle = {
  listStyle: 'none',
};

const liStyle = {
  marginBottom: '2px',
};

export default ContactList;
