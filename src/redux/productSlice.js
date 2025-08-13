import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
	name: 'products',
	initialState: {
		data: [],
		pending: false,
		error: null,
	},
	reducers: {
		setPending: (state) => {
			state.pending = true;
			state.error = null;
		},
		setProducts: (state, action) => {
			state.data = action.payload;
			state.pending = false;
			state.error = null;
		},
		setError: (state, action) => {
			state.pending = false;
			state.error = action.payload;
		},
	},
});

export const { setPending, setProducts, setError } =
	productsSlice.actions;
export default productsSlice.reducer;
