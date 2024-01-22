
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
        </div>
      </Provider>
    );
  };

  export default PrivatePhonebook;