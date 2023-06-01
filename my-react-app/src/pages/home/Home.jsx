import React, {useEffect} from 'react';
import Header from "../../components/header/Header.jsx";
import BookList from "../../components/book-list/BookList.jsx";
import {useDispatch, useSelector} from "react-redux";
import {setBooks} from "../../store/slices/bookSlice.js";
const Home = () => {
	const inputValueBook = useSelector(state => state.searchSlice.inputValueBook);
	const category = useSelector(state => state.searchSlice.category);
	const sort = useSelector(state => state.searchSlice.sort);
	const startIndex = useSelector(state => state.searchSlice.startIndex);
	const dispatch = useDispatch();
	
	const key = 'AIzaSyBeBtB61Ca0lJZvJZ-spFS4eRxM9hUD1po';
	const url = `https://www.googleapis.com/books/v1/volumes?q=${inputValueBook}+subject:${category === 'All' ? '' : category}&orderBy=${sort}&startIndex=${startIndex}&key=${key}&maxResults=30`;
	const basicUrl = `https://www.googleapis.com/books/v1/volumes?q=The Witcher+subject:${category === 'All' ? '' : category}&orderBy=${sort}&key=${key}&maxResults=30`;
	
	
	useEffect(() => {
		fetch(inputValueBook ? url : basicUrl)
			.then(response => response.json())
			.then(obj => {
				dispatch(setBooks(obj.items));
			})
	}, [inputValueBook, category, sort, startIndex]);
	
	return (
		<div>
			<Header/>
			<BookList/>
		</div>
	);
};

export default Home;