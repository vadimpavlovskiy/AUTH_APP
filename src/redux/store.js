import { configureStore } from "@reduxjs/toolkit";
import { postsSlice } from "./posts.slice";
import { userSlice } from "./user.slice";

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        posts: postsSlice.reducer,
    },
});

export default store;
