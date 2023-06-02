import React, {useEffect} from 'react';
import styles from './BookList.module.scss';
import BookCard from "../book-card/BookCard.jsx";
import {useDispatch, useSelector} from "react-redux";
import {setStartIndex} from "../../store/slices/searchSlice.js";
import {Link} from "react-router-dom";
import {setSelectedBook} from "../../store/slices/bookSlice.js";

const BookList = () => {
	const startIndex = useSelector(state => state.searchSlice.startIndex);
	const listBooks = useSelector(state => state.bookSlice.books);
	const dispatch = useDispatch();
	
	
	return (
		<>
			<p className={styles.title}> Найденные книги </p>
			<div className={styles.content}>
				{listBooks?.map(book => {
						return(
							<Link className={styles.linkBookCard} key={book.id} onClick={() => dispatch(setSelectedBook(book))} to="/book">
								<BookCard
									title={book.volumeInfo?.title}
									author={book.volumeInfo?.authors}
									categories={book.volumeInfo?.categories}
									img={book.volumeInfo.imageLinks?.thumbnail}
								/>
							</Link>
						)
				})}
			</div>
			{!listBooks
				? <div className={styles.titleUnsuccessful}> Oops, try another request! </div>
				: <button onClick={() => dispatch(setStartIndex(startIndex + 30))} className={styles.buttonShowMore}> Show More </button>
			}
		</>
	);
};

export default BookList;