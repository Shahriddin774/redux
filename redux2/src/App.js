import React from 'react';
import { Provider } from 'react-redux';
import store from "./components/store";
import UserComponent from './components/user';

const App = () => {
  return (
      <Provider store={store}>
        <UserComponent />
      </Provider>
  );
};

export default App;