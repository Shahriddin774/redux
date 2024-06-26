import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    content: '',
    status: 'idle',
    error: null,
};

const API_URLS = {
    Frontend: 'https://jsonplaceholder.typicode.com/posts/1',
    Backend: 'https://jsonplaceholder.typicode.com/posts/2',
    iOS: 'https://jsonplaceholder.typicode.com/posts/3',
    Android: 'https://jsonplaceholder.typicode.com/posts/4',
    'UX/UI': 'https://jsonplaceholder.typicode.com/posts/5',
};

export const fetchTabContent = createAsyncThunk(
    'tabs/fetchTabContent',
    async (tab) => {
        const response = await fetch(API_URLS[tab]);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    }
);

const tabsSlice = createSlice({
    name: 'tabs',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTabContent.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTabContent.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.content = action.payload;
            })
            .addCase(fetchTabContent.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default tabsSlice.reducer;
