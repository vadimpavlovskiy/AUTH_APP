import { createSlice } from "@reduxjs/toolkit";
import Snackbar from "react-native-snackbar";
import { broken_api_comments, correct_api_comments } from "../api/api_constans";
import { postsSlice } from "./posts.slice";
import { Platform } from "react-native";

const initialState = {
    comments: null,
    loading: false,
    error: null,
}

export const getComments = (id, api) => async (dispatch) => {
    dispatch(setLoadingComments());
    await fetch(`${api}/${id}/comments`)
        .then((data) => {
            if (data.ok) {
                return data.json();
            } else {
                setTimeout(() => { // I added this timeout speccialy for addroid, becouse show/hide was too quick for react
                    Snackbar.show({
                        text: "This request is bitten, because requirments.",
                        duration: Snackbar.LENGTH_LONG,
                        action: {
                            text: 'Try correct request',
                            onPress: () => { dispatch(getComments(id, correct_api_comments)) }
                        },
                    });
                }, 200);
            }
        }).then(data => { data ? dispatch(setComments(data)) : dispatch(setError()) }).catch((error) => { dispatch(setError()) });
}

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        setLoadingComments: (state) => {
            state.loading = true;
            state.error = false;
            state.comments = null;
        },
        setError: (state) => {
            state.comments = null;
            state.error = true;
            state.loading = false;
        },
        setComments: (state, action) => {
            state.comments = action.payload;
            state.loading = false;
            state.error = false;
        },
        deleteComments: (state) => {
            state.comments = null;
            state.loading = false;
            state.error = false;
        },
    }
})

export const { setLoadingComments, setError, setComments, deleteComments } = commentsSlice.actions;

export const postsReducer = postsSlice.reducer;