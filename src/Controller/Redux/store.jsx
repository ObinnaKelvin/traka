import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import incidenceReducer from './incidenceSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        incidence: incidenceReducer
    }
})