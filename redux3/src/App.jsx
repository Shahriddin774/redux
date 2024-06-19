import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/register';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RegistrationForm />} />
                <Route path="/register" element={<RegistrationForm />} />
            </Routes>
        </Router>
    );
};

export default App;
