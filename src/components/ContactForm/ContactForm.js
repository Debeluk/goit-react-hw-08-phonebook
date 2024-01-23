import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'phone') {
      setNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const isDuplicate = contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    if (isDuplicate) {
      alert('Contact with the same name or phone number already exists');
      return;
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Phone:
        <input
          type="tel"
          name="phone"
          value={number}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
