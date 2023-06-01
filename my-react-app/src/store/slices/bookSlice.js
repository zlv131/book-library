import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	books: [],
	selectedBook: JSON.parse(localStorage.getItem('selectedBook')),
}

const bookSlice = createSlice({
	name: 'bookSlice',
	initialState,
	reducers: {
		setBooks (state, action) {
			state.books = action.payload;
		},
		
		setSelectedBook (state, action) {
			state.selectedBook = action.payload;
		}
	}
})

export const { setBooks, setSelectedBook } = bookSlice.actions;
export default bookSlice.reducer