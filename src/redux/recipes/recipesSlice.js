import { createSlice } from '@reduxjs/toolkit';
import {
  getRecipeById,
  addToFavorites,
  removeFromFavorites,
} from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};
console.log(initialState);
const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getRecipeById.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;

        state.error = null;
      })
      .addCase(getRecipeById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getRecipeById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addToFavorites.fulfilled, (state, action) => {
        state.items.map(item => item.id === action.payload.id);

        state.isLoading = false;

        state.error = null;
      })
      .addCase(addToFavorites.pending, state => {
        state.isLoading = true;
      })
      .addCase(addToFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(removeFromFavorites.fulfilled, (state, action) => {
        state.items.map(item => item.id === action.payload.id);
        // state.items = action.payload;
        state.isLoading = false;

        state.error = null;
      })
      .addCase(removeFromFavorites.pending, state => {
        state.isLoading = true;
      })
      .addCase(removeFromFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const recipesReducer = recipesSlice.reducer;
