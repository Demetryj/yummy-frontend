import { createSlice } from '@reduxjs/toolkit';
import { addRecipe, deleteRecipe, fetchRecipes, fetchRecipesPopular } from './operations';

const initialState = {
  items: [],
  popular: {"Vegan":[{title:"Salat"}]}, // подумати чи потрібно це !!!
  isLoading: false,
  error: null,
};

console.log("initialState.popular:",initialState.popular)

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchRecipes.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    }).addCase(fetchRecipes.pending, state => {
      state.isLoading = true;
    }).addCase(fetchRecipes.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }).addCase(fetchRecipesPopular.fulfilled, (state, action) => { //builder для запроса в якому отримуємо обєкт з 16 рецептами
      state.popular = action.payload;
      state.isLoading = false;
      state.error = null;
      console.log("Hello from recipesSlise");
      console.log("action.payload: ", action.payload);
    }).addCase(fetchRecipesPopular.pending, state => {
      state.isLoading = true;
    }).addCase(fetchRecipesPopular.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(addRecipe.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.items.push(action.payload); 
        }).addCase(addRecipe.pending, state => {
          state.isLoading = true;
        }).addCase(addRecipe.rejected, (state, action) => {
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
        }).addCase(deleteRecipe.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        })
  },
});

export const recipesReducer = recipesSlice.reducer;