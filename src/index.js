import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit'


//Reducers

import authReducer from './Controller/Redux/authSlice';
import incidenceReducer from './Controller/Redux/incidenceSlice';
import userReducer from './Controller/Redux/userSlice';

//Redux configure
const reducer = combineReducers({
  auth:authReducer,
  incidence:incidenceReducer,
  user:userReducer
})

const store = configureStore({
  reducer
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
