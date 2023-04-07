import { createSlice } from '@reduxjs/toolkit';
import { addRecipe, deleteRecipe, fetchRecipes } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchRecipes.fulfilled,(state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    }).addCase(fetchRecipes.pending, state => {
      state.isLoading = true;
    }).addCase(fetchRecipes, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(addRecipe.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.items.push(action.payload); 
        }).addCase(addRecipe.pending, state => {
          state.isLoading = true;
        }).addCase(addRecipe, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        });
        builder.addCase(deleteRecipe.fulfilled, (state, action) => {
              state.isLoading = false;
              state.error = null;
              const index = state.items.findIndex(
                contact => contact.id === action.payload.id
                );
              state.items.splice(index, 1); 
        }).addCase(deleteRecipe.pending, state => {
          state.isLoading = true;
        }).addCase(deleteRecipe, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        })
  },
});

export const recipesReducer = recipesSlice.reducer;