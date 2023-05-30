import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	inputValueBook: '',
	category: 'All',
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
		}
	}
})

export const { setInputValueBook, setCategory } = searchSlice.actions;
export default searchSlice.reducer