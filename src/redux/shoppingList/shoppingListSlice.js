import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const shoppingList = createSlice({
  name: 'shoppingList',
  initialState,
  extraReducers: builder => {
    builder.addCase();
  },
});

export const shoppingListReducer = shoppingList.reducer;
