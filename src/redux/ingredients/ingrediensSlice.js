import { createSlice } from '@reduxjs/toolkit';
import { fetchIngredients } from './operations';

const initialState = { items: [], isLoading: false, error: null };

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
      .addCase(fetchIngredients, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const ingredientsReducer = ingrediensSlice.reducer;
