import { configureStore } from '@reduxjs/toolkit'
import bookSlice from "./slices/bookSlice.js";
import searchSlice from './slices/searchSlice.js';
export const store = configureStore({
	reducer: {
		bookSlice,
		searchSlice,
	},
})