import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const ingrediensSlice = createSlice({
  name: 'ingredients',
  initialState,
  extraReducers: builder => {
    builder.addCase();
  },
});

export const ingredientsReducer = ingrediensSlice.reducer;
