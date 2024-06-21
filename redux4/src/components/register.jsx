import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validata = () => {
        const newErrors = {};

        if (!formData.fullName) {
            newErrors.fullName = 'обязательно';
        }

        if (!formData.email) {
            newErrors.email = 'обязательно';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'неверный адресс';
        }

        if (!formData.username) {
            newErrors.username = 'обязательно';
        }

        if (!formData.password) {
            newErrors.password = 'оьязательно';
        } else if (formData.password.length < 8) {
            newErrors.password = 'должно быть не меньше 8';
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "обязательно";
        } else if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = 'пароли должны совпарать';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = validata();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            axios.post('/api/register', formData)
                .then(response => {
                    console.log('Registration successful', response);
                })
                .catch(error => {
                    console.error('There was an error registering!', error);
                });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="fullName">Full Name</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
                {errors.fullName && <div>{errors.fullName}</div>}
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <div>{errors.email}</div>}
            </div>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} />
                {errors.username && <div>{errors.username}</div>}
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
                {errors.password && <div>{errors.password}</div>}
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                {errors.confirmPassword && <div>{errors.confirmPassword}</div>}
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
