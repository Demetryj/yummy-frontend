import { createSlice } from '@reduxjs/toolkit';
import { getRecipes, removeRecipe } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  total: 0,
};

const recipesSlice = createSlice({
  name: 'my_recipes',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getRecipes.fulfilled, (state, { payload }) => {
        state.items = payload.recipeData;
        state.total = payload.metaData.total;
        state.isLoading = false;
      })
      .addCase(getRecipes.pending, state => {
        state.isLoading = true;
      })
      .addCase(getRecipes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(removeRecipe.fulfilled, (state, { payload }) => {
        state.items = payload.recipeData;
        state.total = payload.metaData.total;
        state.isLoading = false;
      })
      .addCase(removeRecipe.pending, state => {
        state.isLoading = true;
      })
      .addCase(removeRecipe.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const myRecipesReducer = recipesSlice.reducer;
