import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './Navigation/Login';
import RegisterPage from './Navigation/Registration';
import PrivatePhonebook from './Navigation/PrivatePhonebook';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
            <Route path="/login" component={LoginPage} />
            <Route path='/registration' component={RegisterPage} />
            <Route path="/contacts" component={PrivatePhonebook} />
        </div>
      </Router>
    </Provider>
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