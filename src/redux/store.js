import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './newsSlice';
import productsReducer from './productSlice';
import authReducer from '../admin/redux/authSlice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
    products: productsReducer,
    auth: authReducer,
  },
});
