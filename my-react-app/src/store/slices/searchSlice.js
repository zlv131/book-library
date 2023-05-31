import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	inputValueBook: '',
	category: 'All',
	sort: 'relevance',
}

const searchSlice = createSlice({
	name: 'searchSlice',
	initialState,
	reducers: {
		setInputValueBook (state, action) {
			state.inputValueBook = action.payload;
		},
		
		setCategory (state, action) {
			state.category = action.payload;
		},
		
		setSort (state, action) {
			state.sort = action.payload;
		},
	}
})

export const { setInputValueBook, setCategory, setSort } = searchSlice.actions;
export default searchSlice.reducer