import { createSlice } from '@reduxjs/toolkit';
import { addRecipe, deleteRecipe, fetchRecipes } from './operations';

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
  extraReducers: {
    [fetchRecipes.pending]: handlePending,
    [fetchRecipes.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.recipes = action.payload;
    },
    [fetchRecipes.rejected]: handleRejected,
    [addRecipe.pending]: handlePending,
    [addRecipe.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.recipes.push(action.payload);
    },
    [addRecipe.rejected]: handleRejected,
    [deleteRecipe.pending]: handlePending,
    [deleteRecipe.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.recipes.findIndex(
        contact => contact.id === action.payload.id
      );
      state.recipes.splice(index, 1);
    },
    [deleteRecipe.rejected]: handleRejected,
  },
  // extraReducers: builder => {
  //   builder.addCase();
  // },
});

export const recipesReducer = recipesSlice.reducer;
