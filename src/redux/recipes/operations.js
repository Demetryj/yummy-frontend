import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/api'; 

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`; //TODO: delete - це напевно тимчасово для "локального" з"єднання frontend з backend 
};

export const addRecipe = createAsyncThunk(
  'recipes/addRecipe',
  async (recipe, thunkAPI) => {
    const { title, description, ingredients } = recipe;
    try {
      const response = await axios.post('/recipes', { title, description, ingredients});
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteRecipe = createAsyncThunk(
  'recipes/deleteRecipe',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/recipes/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchRecipes = createAsyncThunk(
  'recipes/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/recipes');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// запрос, в якому отримуємо обєкт з 16 рецептами для MainPage
  export const fetchRecipesMainPage = createAsyncThunk(
    'recipes/fetchPopular',
    async (_, thunkAPI) => {
      try {
        const response = await axios.get('/recipes/main-page');
        setAuthHeader(response.data.token); //TODO: delete - це напевно тимчасово для "локального" з"єднання frontend з backend 
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
);