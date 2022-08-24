import { combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './reducers/userReducer';
import allUsersReducer from './reducers/allUsersReducer';
import colorsReducer from './reducers/colorsReducer';

const rootReducer = combineReducers({
  user: usersReducer,
  allUsers: allUsersReducer,
  colors: colorsReducer,
});

export const store = configureStore({ reducer: rootReducer, middleware: [thunkMiddleware] });
