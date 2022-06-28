import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    error: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.error = false;
        },
        setError: (state, action) => {
            state.error = true;
            state.user = null;
        }
    },
});

export const { setUser, setError } = userSlice.actions;

export default userSlice.reducer;
