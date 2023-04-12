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


export const getRecipesPopular = createAsyncThunk(
  'all/popular',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/popular-recipes`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const getRecipeById = createAsyncThunk(
  'recipes/getRecipeById',
  async (_id, thunkAPI) => {
    console.log(_id);
    try {
      const response = await axios.get(`/recipes/${_id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const getRecipeByCategory = createAsyncThunk(
  'recipes/getRecipeByCategory',
  async (category, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/${category}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addRecipe = createAsyncThunk(
  'recipes/addRecipe',
  async (recipe, thunkAPI) => {
    const { title, description, ingredients } = recipe;
    try {
      const response = await axios.post('/recipes', {
        title,
        description,
        ingredients,
      });
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

export const addToFavorites = createAsyncThunk(
  'recipes/addToFavorites',
  async (_id, thunkAPI) => {
    try {
      const response = await axios.patch(`/recipes/${_id}/favorites/true`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const removeFromFavorites = createAsyncThunk(
  'recipes/removeFromFavorites',
  async (_id, thunkAPI) => {
    try {
      const response = await axios.patch(`/recipes/${_id}/favorites/false`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


