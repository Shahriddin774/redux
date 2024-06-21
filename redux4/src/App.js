import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/Store';
import Counter from './components/counter';
import RegistrationForm from './components/register';

function App() {
    return (
        <Provider store={store}>
            <div>
                <Counter />
                <RegistrationForm />
            </div>
        </Provider>
    );
}

export default App;

