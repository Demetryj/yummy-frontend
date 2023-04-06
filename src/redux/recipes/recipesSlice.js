import { createSlice } from '@reduxjs/toolkit';
import {
  addRecipe,
  deleteRecipe,
  fetchRecipes,
  fetchRecipesMainPage,
  fetchSearchRecipes,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  item: [],
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
  },
});

export const recipesReducer = recipesSlice.reducer;
