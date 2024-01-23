import React, { useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { fetchContacts } from '../../redux/contactsSlice';
import UserMenu from './UserMenu';

const PrivatePhonebook = () => {
  useEffect(() => {
    store.dispatch(fetchContacts());
  }, []);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid gray',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
  };

  return (
    <Provider store={store}>
      <div style={containerStyle}>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />

        <h2>Current Account</h2>
        <UserMenu />
      </div>
    </Provider>
  );
};

export default PrivatePhonebook;
