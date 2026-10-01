import {configureStore} from "@reduxjs/toolkit";
import movieReducer from "./movieSllice"
export const store = configureStore({
    reducer: {
        movies:movieReducer,
    },
});