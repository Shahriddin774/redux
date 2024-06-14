const initialState = 0;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PLUS':
            return state + 1;
        case 'MINUS':
            return Math.max(0, state - 1);
        case 'POLO':
            return state + 10
        case 'RALFH':
            return Math.max(0, state - 10)
        default:
            return state;
    }
};

export default reducer;
