import axios from 'axios';
import { setPending, setNews, setError } from './newsSlice';
import {
	setPending as setProductsPending,
	setProducts,
	setError as setProductsError,
} from './productSlice';
import { backendUrl } from '../config';

const getAuthHeader = () => {
	const token = localStorage.getItem('authToken');
	return {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
};

// Fetch all news
export const fetchNews = () => async (dispatch) => {
	try {
		dispatch(setPending());
		const response = await axios.get(`${backendUrl}/news`);
		dispatch(setNews(response.data.news));
	} catch (error) {
		dispatch(
			setError(error?.response?.data?.message || error.message)
		);
	}
};

// Post a news item
export const postNews = (newsData) => async (dispatch) => {
	try {
		dispatch(setPending());
		const response = await axios.post(
			`${backendUrl}/news`,
			newsData,
			getAuthHeader()
		);
		dispatch(fetchNews()); // Refresh list after posting
		return response.data;
	} catch (error) {
		dispatch(
			setError(error?.response?.data?.message || error.message)
		);
		throw error;
	}
};

// Update a news item
export const updateNews = (id, newsData) => async (dispatch) => {
	try {
		dispatch(setPending());
		const response = await axios.put(
			`${backendUrl}/news/${id}`,
			newsData,
			getAuthHeader()
		);
		dispatch(fetchNews()); // Refresh list
		return response.data;
	} catch (error) {
		dispatch(
			setError(error?.response?.data?.message || error.message)
		);
		throw error;
	}
};

// Delete a news item
export const deleteNews = (id) => async (dispatch) => {
	try {
		dispatch(setPending());
		const response = await axios.delete(
			`${backendUrl}/news/${id}`,
			getAuthHeader()
		);
		dispatch(fetchNews()); // Refresh list
		return response.data;
	} catch (error) {
		dispatch(
			setError(error?.response?.data?.message || error.message)
		);
		throw error;
	}
};

export const fetchProducts = () => async (dispatch) => {
	try {
		dispatch(setProductsPending());
		const response = await axios.get(`${backendUrl}/products`);
		dispatch(setProducts(response.data.products || [])); // ✅ Only store the array
	} catch (error) {
		dispatch(
			setProductsError(
				error?.response?.data?.message || error.message
			)
		);
	}
};

export const postProduct = (productData) => async (dispatch) => {
	try {
		dispatch(setProductsPending());
		const response = await axios.post(
			`${backendUrl}/products`,
			productData,
			getAuthHeader()
		);
		dispatch(fetchProducts());
		return response.data;
	} catch (error) {
		dispatch(
			setProductsError(
				error?.response?.data?.message || error.message
			)
		);
		throw error;
	}
};

export const updateProduct = (id, productData) => async (dispatch) => {
	try {
		dispatch(setProductsPending());
		const response = await axios.put(
			`${backendUrl}/products/${id}`,
			productData,
			getAuthHeader()
		);
		dispatch(fetchProducts());
		return response.data;
	} catch (error) {
		dispatch(
			setProductsError(
				error?.response?.data?.message || error.message
			)
		);
		throw error;
	}
};

export const deleteProduct = (id) => async (dispatch) => {
	try {
		dispatch(setProductsPending());
		const response = await axios.delete(
			`${backendUrl}/products/${id}`,
			getAuthHeader()
		);
		dispatch(fetchProducts());
		return response.data;
	} catch (error) {
		dispatch(
			setProductsError(
				error?.response?.data?.message || error.message
			)
		);
		throw error;
	}
};
