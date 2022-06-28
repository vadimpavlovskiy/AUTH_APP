import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { broken_api, correct_api } from "../api/api_constans";

const initialState = {
    posts: null,
    loading: false,
    error: false,
}

export const getPosts = () => async (dispatch) => {
    dispatch(setLoadingPosts());
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((data) => {
            if (data.ok) {

                return data.json();

            } else {
                dispatch(setError())
            }
        }).catch(() => dispatch(setError()));
    setTimeout(() => {
        dispatch(setPosts(posts))
    }, 3000)
}
export const getBrokenPosts = () => async (dispatch) => {
    dispatch(setLoadingPosts());
    const posts = await fetch('https://jsonplaceholder.typicode.com/post')
        .then((data) => {
            if (data.ok) {
                setTimeout(() => {
                    return dispatch(setPosts(data.json()));
                }, 3000)
            } else {
                dispatch(setError())
            }
        }).catch((error) => { dispatch(setError()) });

}
export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setLoadingPosts: (state) => {
            state.loading = true;
            state.error = false;
            state.posts = null;
        },
        setError: (state) => {
            state.posts = null;
            state.error = true;
            state.loading = false;
        },
        setPosts: (state, action) => {
            state.posts = action.payload;
            state.loading = false;
            state.error = false;
        },
        deletePosts: (state) => {
            state.posts = null;
        },
    },
    // extraReducers: (builder) => {
    //     builder.addCase(getPosts.pending, (state) => {
    //         state.loading = true;
    //     })
    //     builder.addCase(getPosts.fulfilled, (state, payload) => {
    //         state.loading = false;
    //         state.posts = payload;
    //     })
    //     builder.addCase(getPosts.rejected, (state, payload) => {
    //         state.loading = false;
    //         state.error = true;
    //     })
    // },
});
export const { deletePosts, setLoadingPosts, setError, setPosts } = postsSlice.actions

export const postsReducer = postsSlice.reducer;
