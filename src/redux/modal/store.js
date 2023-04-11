import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './slice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});
