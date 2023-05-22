import { createSlice } from '@reduxjs/toolkit';
import { fetchIngredients, fetchRecipesByIngredient } from './operations';

const initialState = {
  items: [],
  selectedRecipes: [],
  isLoading: false,
  error: null,
};

const ingrediensSlice = createSlice({
  name: 'ingredients',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchIngredients.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    builder
      .addCase(fetchRecipesByIngredient.fulfilled, (state, action) => {
        state.selectedRecipes = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchRecipesByIngredient.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchRecipesByIngredient.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const ingredientsReducer = ingrediensSlice.reducer;
