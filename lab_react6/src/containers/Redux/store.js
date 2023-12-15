import { configureStore } from "@reduxjs/toolkit";
import laptopReducer from "./reduces/laptopSlice.js";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = configureStore({
    reducer: {
        laptop: laptopReducer,
    },
}, composeWithDevTools());

export default store;
