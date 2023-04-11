import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://soyummy-pg-2.onrender.com/api';

export const fetchRecipesMainPage = createAsyncThunk(
  'recipes/fetchPopular',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/recipes/main-page');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchSearchRecipes = createAsyncThunk(
'recipes/fetchSearch',
async (query, thunkAPI) => {
  try {
    const response = await axios.get(`/search?keyword=${query}`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
}
);