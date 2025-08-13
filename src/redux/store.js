import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './newsSlice';
import productsReducer from './productSlice';

export const store = configureStore({
	reducer: {
		news: newsReducer,
		products: productsReducer,
	},
});
