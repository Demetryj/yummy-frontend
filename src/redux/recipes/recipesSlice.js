import { createSlice } from '@reduxjs/toolkit';
import { addRecipe, deleteRecipe, fetchRecipes } from './operations';

const initialState = {
  item: [],
  isLoading: false,
  error: null,
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchRecipes.fulfilled,(state, action) => {
      state.recipes = action.payload;
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
          state.recipes.push(action.payload); // уточнити! МОЖЛИВО треба - state.recipes.item.push(action.payload)
        }).addCase(addRecipe.pending, state => {
          state.isLoading = true;
        }).addCase(addRecipe, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        });
        builder.addCase(deleteRecipe.fulfilled, (state, action) => {
              state.isLoading = false;
              state.error = null;
              const index = state.recipes.findIndex(
                contact => contact.id === action.payload.id
                );
              state.recipes.splice(index, 1);  // уточнити! МОЖЛИВО треба - state.recipes.item.splice(index, 1)
        }).addCase(deleteRecipe.pending, state => {
          state.isLoading = true;
        }).addCase(deleteRecipe, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        })
  },
});
// чи потрібен return в builder.addCase ?????
export const recipesReducer = recipesSlice.reducer;