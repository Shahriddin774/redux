import React, { useState } from 'react';
import UserCard from './ts/users/User.tsx';
import { fetchUser } from './ts/api/Apishka.ts';

const App = () => {
  const [user, setUser] = useState(null);

  const MoreInfoClick = async () => {
    try {
      const user = await fetchUser();
      setUser(user);
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  return (
      <div>
        <button onClick={MoreInfoClick}>Подробнее</button>
        {user && <UserCard user={user} />}
      </div>
  );
};

export default App;
