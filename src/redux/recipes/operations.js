import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://soyummy-pg-2.onrender.com/api';

export const fetchRecipesMainPage = createAsyncThunk(
  'recipes/fetchPopular',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://soyummy-pg-2.onrender.com/api/recipes/main-page'
      );
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
      const response = await axios.get(
        `https://soyummy-pg-2.onrender.com/api/search?keyword=${query}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCategoriesList = createAsyncThunk(
  'recipes/fetchCategories',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'http://localhost:3001/api/recipes/category/list'
      );
      return response.data.category;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchRecipesByCategory = createAsyncThunk(
  'recipes/fetchRecipesBy',
  async (category, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/recipes/category/${category}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
