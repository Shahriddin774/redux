import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from './action';

const RegistrationForm = () => {
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
    });

    const dispatch = useDispatch();
    const userState = useSelector(state => state.user);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.password !== form.confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        dispatch(registerUser(form));
    };

    return (
        <div>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Full Name:</label>
                    <input type="text" name="fullName" value={form.fullName} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={form.username} onChange={handleChange} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={form.password} onChange={handleChange} required />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />
                </div>
                <button type="submit">Register</button>
            </form>
            {userState.loading && <p>Loading...</p>}
            {userState.error && <p>{userState.error}</p>}
            {userState.user && <p>Registration successful!</p>}
        </div>
    );
};

export default RegistrationForm;
