import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  // registerError,
  // registerSuccess,
  // loginError,
  // loginSuccess,
  logoutError,
  logoutSuccess,
  getCurrentUserError,
  getCurrentUserSuccess,
} from './authActions';
import { register, login } from './authOperations';

const initialState = { name: null, number: null };

const user = createReducer(initialState, {
  [register.fulfilled]: (_, { payload }) => payload.user,
  [login.fulfilled]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => initialState,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [register.fulfilled]: (_, { payload }) => payload.token,
  [login.fulfilled]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [register.rejected]: (_, { payload }) => payload,
  [login.rejected]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
  [getCurrentUserError]: (_, { payload }) => payload,
});

const isAthenticated = createReducer(false, {
  [register.fulfilled]: () => true,
  [login.fulfilled]: () => true,
  [getCurrentUserSuccess]: () => true,
  [register.rejected]: () => false,
  [login.rejected]: () => false,
  [getCurrentUserError]: () => false,
  [logoutSuccess]: () => false,
});

export default combineReducers({
  user,
  token,
  isAthenticated,
  error,
});
