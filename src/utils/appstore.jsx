import { configureStore } from "@reduxjs/toolkit";
import  useReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import GPTReducer from "./GPT_Slice";

const appstore = configureStore ( 
    {
    

        reducer: {
            user: useReducer,
            movies: moviesReducer,
            gpt:GPTReducer,
            
        },
    }
);

export default appstore;