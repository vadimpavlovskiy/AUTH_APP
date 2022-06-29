import { configureStore } from "@reduxjs/toolkit";
import { commentsSlice } from "./comments.slice";
import { postsSlice } from "./posts.slice";
import { userSlice } from "./user.slice";

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        posts: postsSlice.reducer,
        comments: commentsSlice.reducer,
    },
});

export default store;
