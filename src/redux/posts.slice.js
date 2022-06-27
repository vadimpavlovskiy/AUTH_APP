import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: null,
    loading: true,
    error: null,
}

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (thunkAPI) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts').then((data) => data.json());
        return res;
    }
);

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPosts.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getPosts.fulfilled, (state, payload) => {

            state.loading = false;
            state.posts = payload;

        })
        builder.addCase(getPosts.rejected, (state, payload) => {
            state.loading = false;
            state.error = true;
        })
    },
});

export const postsReducer = postsSlice.reducer;
