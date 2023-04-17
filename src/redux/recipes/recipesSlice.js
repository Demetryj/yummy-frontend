import { createSlice } from '@reduxjs/toolkit';

import {
  fetchCategoriesList,
  fetchRecipesByCategory,
  getRecipeById,
  addToFavorites,
  removeFromFavorites,
  fetchRecipesMainPage,
  fetchSearchRecipes,
  getRecipesPopular,
} from './operations';

const initialState = {
  items: [],
  paginationData: null,
  categories: [],
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
      })

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
      })

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
      })

      .addCase(fetchSearchRecipes.fulfilled, (state, action) => {
        state.items = action.payload[0].recipeData;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchSearchRecipes.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchSearchRecipes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(fetchCategoriesList.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCategoriesList.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCategoriesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchRecipesByCategory.fulfilled, (state, action) => {
        state.items = action.payload.recipeData;
        state.paginationData = action.payload.metaData;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchRecipesByCategory.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchRecipesByCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const recipesReducer = recipesSlice.reducer;
