import React from 'react';
import styles from './BookCard.module.scss';
import {Link} from "react-router-dom";

const BookCard = ({ title, author, categories, img }) => {
	return (
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<img className={styles.bookImg} src={img}/>
					<p className={styles.tag}> {categories ? categories : 'Без категории'} </p>
					<p className={styles.title}> {title}  </p>
					<p className={styles.author}> {author} </p>
				</div>
			</div>
	);
};

export default BookCard;