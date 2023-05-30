import React, {useEffect} from 'react';
import Header from "../../components/header/Header.jsx";
import BookList from "../../components/book-list/BookList.jsx";
import {useDispatch, useSelector} from "react-redux";
import {setBooks} from "../../store/slices/bookSlice.js";
const Home = () => {
	const books = useSelector(state => state.bookSlice.books);
	const inputValueBook = useSelector(state => state.searchSlice.inputValueBook);
	const category = useSelector(state => state.searchSlice.category);
	const dispatch = useDispatch();
	
	const key = 'AIzaSyBeBtB61Ca0lJZvJZ-spFS4eRxM9hUD1po';
	const url = `https://www.googleapis.com/books/v1/volumes?q=${inputValueBook}&categories=${category}&key=${key}&maxResults=40`;
	const basicUrl = `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${key}&maxResults=40`
	
	
	useEffect(() => {
		fetch(inputValueBook ? url : basicUrl)
			.then(response => response.json())
			.then(obj => {
				dispatch(setBooks(obj.items));
			});
	}, [inputValueBook, category]);
	
	return (
		<div>
			<Header/>
			<BookList/>
		</div>
	);
};

export default Home;