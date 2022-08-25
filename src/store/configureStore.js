import { combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './reducers/userReducer';
import getAllUsersReducer from './reducers/getAllUsersReducer';

const rootReducer = combineReducers({
  user: usersReducer,
  allUsers: getAllUsersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
});
