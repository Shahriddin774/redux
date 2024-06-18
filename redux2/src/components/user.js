import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, fetchUserById } from './actions';

const UserComponent = () => {
    const [selectedUserId, setSelectedUserId] = useState(null);
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    const user = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    useEffect(() => {
        if (selectedUserId) {
            dispatch(fetchUserById(selectedUserId));
        }
    }, [dispatch, selectedUserId]);

    if (selectedUserId && user) {
        return (
            <div>
                <button onClick={() => setSelectedUserId(null)}>Back to User List</button>
                <h1>{user.name}</h1>
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedia.2x2tv.ru%2Flego-batman-movie-sequel%2F&psig=AOvVaw2wgn0-KSHkYDSVA-22Z89u&ust=1718742190144000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOizyd-744YDFQAAAAAdAAAAABAF" alt="Avatar" />
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
            </div>
        );
    }

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - <button onClick={() => setSelectedUserId(user.id)}>moreInfo</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserComponent;
