import { configureStore } from "@reduxjs/toolkit";
import projectReducer from './projectSlice';

export default store = configureStore({
    reducer: {
        project: projectReducer
    }
})
