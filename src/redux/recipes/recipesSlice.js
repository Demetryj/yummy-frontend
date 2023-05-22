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
  addRecipe,
  fetchAllRecipes,
} from './operations';

import { getFavorite, removeFavorite } from './favoritesOperations';
import { getOwnRecipes, removeOwnRecipe } from './ownRecipesOperations';

const initialState = {
  items: [],
  recipes: [],
  paginationData: null,
  categories: [],
  popular: [],
  staticRecipes: {},
  isLoading: false,
  error: null,
  favorites: { recipes: [], total: 0 },
  ownRecipes: { recipes: [], total: 0 },
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchRecipesMainPage.fulfilled, (state, action) => {
        state.staticRecipes = action.payload;
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

      .addCase(fetchAllRecipes.fulfilled, (state, action) => {
        state.recipes = action.payload.recipes;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchAllRecipes.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAllRecipes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchSearchRecipes.fulfilled, (state, action) => {
        state.items = action.payload.recipeData;
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
      })
      .addCase(addRecipe.fulfilled, (state, action) => {
        state.items.push(action.payload.result);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addRecipe.pending, state => {
        state.isLoading = true;
      })
      .addCase(addRecipe.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getOwnRecipes.fulfilled, (state, { payload }) => {
        state.ownRecipes.recipes = payload[0].recipeData;
        state.ownRecipes.total = payload[0].metaData.total;
        state.isLoading = false;
      })
      .addCase(getOwnRecipes.pending, state => {
        state.isLoading = true;
      })
      .addCase(getOwnRecipes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(removeOwnRecipe.fulfilled, (state, { payload }) => {
        state.ownRecipes.recipes = payload[0].recipeData;
        state.ownRecipes.total = payload[0].metaData.total;
        state.isLoading = false;
      })
      .addCase(removeOwnRecipe.pending, state => {
        state.isLoading = true;
      })
      .addCase(removeOwnRecipe.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getFavorite.fulfilled, (state, { payload }) => {
        state.favorites.recipes = payload[0].recipeData;
        state.favorites.total = payload[0].metaData.total;
        state.isLoading = false;
      })
      .addCase(getFavorite.pending, state => {
        state.isLoading = true;
      })
      .addCase(getFavorite.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(removeFavorite.fulfilled, (state, { payload }) => {
        state.favorites.recipes = payload[0].recipeData;
        state.favorites.total = payload[0].metaData.total;
        state.isLoading = false;
      })
      .addCase(removeFavorite.pending, state => {
        state.isLoading = true;
      })
      .addCase(removeFavorite.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const recipesReducer = recipesSlice.reducer;
