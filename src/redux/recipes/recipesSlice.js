import { createSlice } from '@reduxjs/toolkit';
import {
  addRecipe,
  deleteRecipe,
  fetchRecipes,
  fetchRecipesMainPage,
  fetchSearchRecipes,
  getRecipeById,
  addToFavorites,
  removeFromFavorites,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

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
      });
  },
});

// });t recipesSlice = createSlice({
//   name: 'recipes',
//   initialState,
//   extraReducers: {
//     [fetchRecipes.pending]: handlePending,
//     [fetchRecipes.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     [fetchRecipes.rejected]: handleRejected,
//     [addRecipe.pending]: handlePending,
//     [addRecipe.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items.push(action.payload);
//     },
//     [addRecipe.rejected]: handleRejected,
//     [deleteRecipe.pending]: handlePending,
//     [deleteRecipe.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.recipes.findIndex(
//         contact => contact.id === action.payload.id
//       );
//       state.recipes.splice(index, 1);
//     },
//     [deleteRecipe.rejected]: handleRejected,
// [getRecipeById.pending]: handlePending,
// [getRecipeById.fulfilled](state, action) {
//   state.isLoading = false;
//   state.error = null;

//   state.items.map(recipe => recipe.id === action.payload.id);
// },
// [getRecipeById.rejected]: handleRejected,

// extraReducers: builder => {
//   builder.addCase();
// },
// });

export const recipesReducer = recipesSlice.reducer;
