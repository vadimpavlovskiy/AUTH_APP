import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Snackbar from "react-native-snackbar";
import { correct_api_posts } from "../api/api_constans";

const initialState = {
    posts: null,
    loading: false,
    error: false,
}
export const getPosts = (api) => async (dispatch) => {
    dispatch(setLoadingPosts());
    console.log(api);
    await fetch(api)
        .then((data) => {
            if (data.ok) {
                return data.json();
            } else {
                Snackbar.show({
                    text: "This request is bitten, because requirments.",
                    duration: Snackbar.LENGTH_INDEFINITE,
                    action: {
                        text: 'Try correct request',
                        onPress: () => { dispatch(getPosts(correct_api_posts)) }
                    },
                })
            }
        }).then(data => { data ? dispatch(setPosts(data)) : dispatch(setError()) }).catch((error) => { dispatch(setError()) });
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
export const { deletePosts, setLoadingPosts, setError, setPosts } = postsSlice.actions;

export const postsReducer = postsSlice.reducer;
