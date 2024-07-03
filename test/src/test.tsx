import React, { useState } from 'react';

interface User {
    username: string;
    password: string;
}

const Registrator: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [conPassword, setConPassword] = useState('');
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState('');

    const hanRegistrator = () => {
        if (!username || !password || !conPassword) {
            setError('Все поля должны быть заполненые');
            return;
        }

        if (password !== conPassword) {
            setError('Пароли не совпадают');
            return;
        }

        const userExists = users.some(user => user.username === username);
        if (userExists) {
            setError('Пользователь с таким именем уже существует');
            return;
        }

        const newUser: User = { username, password };
        setUsers([...users, newUser]);
        setError('');
        setUsername('');
        setPassword('');
        setConPassword('');
    };

    return (
        <div>
            <div>
                <label>Имя пользователя:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Пароль:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <label>Подтвердите пароль:</label>
                <input
                    type="password"
                    value={conPassword}
                    onChange={(e) => setConPassword(e.target.value)}
                />
            </div>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <button onClick={hanRegistrator}>Зарегистрироваться</button>
        </div>
    );
};

export default Registrator;
