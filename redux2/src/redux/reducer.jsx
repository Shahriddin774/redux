const initialState = {
    users: [],
    user: null,
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USERS':
            return { ...state, users: action.payload };
        case 'FETCH_USER_BY_ID':
            return { ...state, user: action.payload };
        default:
            return state;
    }
};