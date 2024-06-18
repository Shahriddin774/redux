export const fetchUsers = () => {
    return async (dispatch) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        dispatch({ type: 'FETCH_USERS', payload: data });
    };
};

export const fetchUserById = (id) => {
    return async (dispatch) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        dispatch({ type: 'FETCH_USER_BY_ID', payload: data });
    };
};
