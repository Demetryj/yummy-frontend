import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  extraReducers: builder => {
    builder.addCase();
  },
});

export const recipesReducer = recipesSlice.reducer;
