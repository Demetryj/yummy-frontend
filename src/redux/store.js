import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { ingredientsReducer } from './ingredients/ingrediensSlice';
import { recipesReducer } from './recipes/recipesSlice';
import {
  categoriesReducer,
  myRecipesReducer,
  favoritesReducer,
} from '../modules';
import { shoppingListReducer } from './shoppingList/shoppingListSlice';
import { modalReducer } from './modal/modalSlice';
import { avatarReducer } from './avatar/avatarSlice';
import { themeReducer } from './theme/themeSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const themePersistConfig = {
  key: 'theme',
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    recipes: recipesReducer,
    categories: categoriesReducer,
    ingredients: ingredientsReducer,
    shoppingList: shoppingListReducer,
    modal: modalReducer,
    avatar: avatarReducer,
    my_recipes: myRecipesReducer,
    favorites: favoritesReducer,
    theme: persistReducer(themePersistConfig, themeReducer),
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
