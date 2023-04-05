import { createSlice } from '@reduxjs/toolkit';
import { register, signIn } from './operations';

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
        console.log(action);
      });
  },
});

export const authReducer = authSlice.reducer;
