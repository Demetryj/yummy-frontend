import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://soyummy-pg-2.onrender.com/api';

// const { BASE_URL } = process.env;
// axios.defaults.baseURL = BASE_URL;
axios.defaults.baseURL = 'http://localhost:3001/api';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = token => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const user = await axios.post('/users/register', credentials);
      const loginData = {
        email: credentials.email,
        password: credentials.password,
      };
      const token = await axios.post('/users/signin', loginData);
      setAuthHeader(token.data.token);
      return { user: user.data, token: token.data.token };
    } catch (error) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/signin',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signin', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.get('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    if (!token) {
      return thunkAPI.rejectWithValue('no token');
    }
    setAuthHeader(token);
    try {
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const RefreshError = createAsyncThunk(
  'auth/errorrefresh',
  async () => {}
);

export const updateProfile = createAsyncThunk(
  'auth/updateProfile',
  async (credentials, thunkAPI) => {
    console.log('credentials', credentials);
    try {
      const res = await axios.post('/users/update', credentials);
      // setAuthHeader(res.data.token);
      console.log('res.data', res.data);
      return res.data;
    } catch (error) {
      const errorMessage = error.response.data.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
