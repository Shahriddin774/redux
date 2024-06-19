const initialState = {
    loading: false,
    user: {},
    error: null,
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_REQUEST':
            return { ...state, loading: true };
        case 'REGISTER_SUCCESS':
            return { loading: false, user: action.payload, error: null };
        case 'REGISTER_FAILURE':
            return { loading: false, user: {}, error: action.payload };
        default:
            return state;
    }
};
