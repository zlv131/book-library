import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	inputValueBook: '',
}

const searchSlice = createSlice({
	name: 'searchSlice',
	initialState,
	reducers: {
		setInputValueBook (state, action) {
			state.inputValueBook = action.payload;
		},
	}
})

export const { setInputValueBook } = searchSlice.actions;
export default searchSlice.reducer