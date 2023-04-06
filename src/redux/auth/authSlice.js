import { createSlice } from '@reduxjs/toolkit';
import { logout, refreshUser, register, signIn } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, (state, action) => {
        return state;
      })
      .addCase(register.fulfilled, (state, action) => {
        console.log(action.payload);
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => state)
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        console.log('slice');
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        console.log(state.user);
        console.log(action.payload);
        state.isLoggedIn = true;
      });
  },
});

export const authReducer = authSlice.reducer;
