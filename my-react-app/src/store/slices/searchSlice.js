import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	inputValueBook: '',
	category: 'All',
	sort: 'relevance',
	startIndex: 1,
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
		
		setStartIndex (state, action) {
			state.startIndex = action.payload;
		}
	}
})

export const { setInputValueBook, setCategory, setSort, setStartIndex } = searchSlice.actions;
export default searchSlice.reducer