import React, {useEffect} from 'react';
import styles from './DetailsBook.module.scss';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
const DetailsBook = () => {
	const selectedBook = useSelector(state => state.bookSlice.selectedBook);
	
	useEffect(() => {
		localStorage.setItem('selectedBook', JSON.stringify(selectedBook));
	}, [selectedBook])
	
	return (
		<>
			<div className={styles.wrapper}>
				<img className={styles.imgBook} src={selectedBook.volumeInfo.imageLinks.thumbnail} alt=""/>
				<div className={styles.category}> {selectedBook.volumeInfo.categories[0]} </div>
				<div className={styles.title}> {selectedBook.volumeInfo.title} </div>
				<div className={styles.author}> {selectedBook.volumeInfo.authors[0]} </div>
				<div className={styles.description}> {selectedBook.volumeInfo.description} </div>
			</div>
			<Link to="/">
				<button className={styles.buttonBack}> Back </button>
			</Link>
		</>
	);
};

export default DetailsBook;