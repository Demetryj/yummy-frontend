// operations
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const getRecipeById = createAsyncThunk(
  'recipes/getRecipeById',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/${id}`);
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
