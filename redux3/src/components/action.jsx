export const registerUser = (userData) => {
    return async (dispatch) => {
        dispatch({ type: 'REGISTER_REQUEST' });
        try {
            const response = await fetch('https://randomuser.me/api/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Registration failed');
            }

            const data = await response.json();
            dispatch({ type: 'REGISTER_SUCCESS', payload: data });
        } catch (error) {
            dispatch({ type: 'REGISTER_FAILURE', payload: error.message });
        }
    };
};
