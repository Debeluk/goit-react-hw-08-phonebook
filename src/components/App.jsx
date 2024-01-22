import React from 'react';
// import { Provider } from 'react-redux';
// import { store } from '../redux/store';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './Navigation/Login';
import RegisterPage from './Navigation/Registration';
import PrivatePhonebook from './Navigation/PrivatePhonebook';
// import Navigator from './Navigation/Navigator';
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

// const App = () => {
//   useEffect(() => {
//     store.dispatch(fetchContacts());
//   }, []);

//   return (
//     <Provider store={store}>
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm />

//         <h2>Contacts</h2>
//         <Filter />
//         <ContactList />
//       </div>
//     </Provider>
//   );
// };
