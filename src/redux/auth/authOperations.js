import axios from 'axios';
import {
  loginError,
  registerError,
  logoutError,
  logoutRequest,
  logoutSuccess,
  getCurrentUserError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
} from './authActions';
import { useDispatch } from 'react-redux';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async credentials => {
  const dispatch = useDispatch();
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    dispatch(registerError(error.message));
  }
});

export const login = createAsyncThunk('auth/login', async credentials => {
  const dispatch = useDispatch();
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    dispatch(loginError(error.message));
  }
});

export const logout = () => dispatch => {
  dispatch(logoutRequest());

  axios
    .post('/users/logout')
    .then(() => {
      token.unset();
      dispatch(logoutSuccess());
    })
    .catch(err => dispatch(logoutError(err.message)));
};

export const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);

  dispatch(getCurrentUserRequest(persistedToken));

  axios
    .get('/users/current')
    .then(({ data }) => dispatch(getCurrentUserSuccess(data)))
    .catch(err => dispatch(getCurrentUserError(err.message)));
};
