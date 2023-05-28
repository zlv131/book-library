import React from 'react';
import styles from './BookList.module.scss';
import BookCard from "../book-card/BookCard.jsx";
import {useSelector} from "react-redux";
const BookList = () => {
	const listBooks = useSelector(state => state.bookSlice.books);
	return (
		<>
			<p className={styles.title}> Найдено {listBooks.length} книг </p>
			<div className={styles.content}>
				{listBooks.map(book => {
					try{
						return(
							<BookCard
								key={book.id}
								title={book.volumeInfo.title}
								author={book.volumeInfo.authors}
								categories={book.volumeInfo.categories}
								img={book.volumeInfo.imageLinks.thumbnail}
							/>
						)}
					catch(err) {
						<BookCard
									key={book.id}
									title={book.volumeInfo.title}
									author={book.volumeInfo.authors}
									categories={book.volumeInfo.categories}
									img={""}
						/>
					}
				})}
				
			</div>
		</>
	);
};

export default BookList;