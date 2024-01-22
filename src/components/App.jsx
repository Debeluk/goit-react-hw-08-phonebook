import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { Route, Router, Switch } from 'react-router-dom';
import LoginPage from './Navigation/Login';
import RegisterPage from './Navigation/registration';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path='/registration' component={RegisterPage} />
          </Switch>
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