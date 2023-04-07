import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
// import { ingredientsReducer } from './ingredients/ingrediensSlice';
// import { recipesReducer } from './recipes/recipesSlice';
// import { shoppingListReducer } from './shoppingList/shoppingListSlice';
import {queryReducer} from './query/querySlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    // ingredients: ingredientsReducer,
    // recepies: recipesReducer,
    // shoppingList: shoppingListReducer,
    query: queryReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
