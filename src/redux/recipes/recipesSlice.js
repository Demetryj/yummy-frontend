import { createSlice } from '@reduxjs/toolkit';
import {
  fetchRecipesMainPage,
  fetchSearchRecipes,
  getRecipesPopular,
} from './operations';

const initialState = {
  items: [],
  popular: [],
  isLoading: false,
  error: null,
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchRecipesMainPage.fulfilled, (state, action) => {
        state.popular = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchRecipesMainPage.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchRecipesMainPage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    builder
      .addCase(fetchSearchRecipes.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchSearchRecipes.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchSearchRecipes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    builder
      .addCase(getRecipesPopular.fulfilled, (state, action) => {
        state.popular = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getRecipesPopular.pending, state => {
        state.isLoading = true;
      })
      .addCase(getRecipesPopular.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const recipesReducer = recipesSlice.reducer;
