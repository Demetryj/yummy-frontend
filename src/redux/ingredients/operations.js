// operations
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const fetchIngredients = createAsyncThunk(
  'ingredients/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/ingredients/list');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchRecipesByIngredient = createAsyncThunk(
  'search/:ingredient',
  async (query, thunkAPI) => {
    try {
      const response = await axios.get(`/search/${query}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
