import { createSlice } from '@reduxjs/toolkit';

const newsSlice = createSlice({
	name: 'news',
	initialState: {
		data: [],
		pending: false,
		error: null,
	},
	reducers: {
		setPending: (state) => {
			state.pending = true;
			state.error = null; // Clear previous errors
		},
		setNews: (state, action) => {
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

export const { setPending, setNews, setError } = newsSlice.actions;
export default newsSlice.reducer;
