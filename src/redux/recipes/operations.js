// operations
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001/api/';
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
