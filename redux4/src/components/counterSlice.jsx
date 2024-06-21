import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        plus1: (state) => {
            state.value += 1;
        },
        plus10: (state) => {
            state.value += 10;
        },
        minus1: (state) => {
            if (state.value > 0) state.value -= 1;
        },
        minus10: (state) => {
            if (state.value >= 10) state.value -= 10;
        },
    },
});

export const { plus1, plus10,minus1, minus10 } = counterSlice.actions;

export default counterSlice.reducer;
