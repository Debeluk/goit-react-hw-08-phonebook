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
  
    return (
      <Provider store={store}>
        <div>
          <h1>Phonebook</h1>
          <ContactForm />
  
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
          <UserMenu />
        </div>
      </Provider>
    );
  };

  export default PrivatePhonebook;