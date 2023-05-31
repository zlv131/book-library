import React from 'react';
import styles from './Header.module.scss';
import Form from 'react-bootstrap/Form';
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setInputValueBook, setSort} from "../../store/slices/searchSlice.js";
import {CATEGORIES, SORT_CATEGORY} from "../../const.js";

const Header = () => {
	const inputValueBook = useSelector(state => state.searchSlice.inputValueBook);
	const dispatch = useDispatch();
	
	return (
		<div>
			<div className={styles.wrapper}>
				<p className={styles.title}> Search for books <img className={styles.imgBook} src="https://cdn0.iconfinder.com/data/icons/emoji-3-5/64/reading_book_emoji-40.png" alt=""/> </p>
				<input value={inputValueBook} onChange={(event) => dispatch(setInputValueBook(event.target.value))} className={styles.input} placeholder={"Попробуйте искать книгу..."} type="text"/>
				<img onClick={() => dispatch(setInputValueBook(''))} className={inputValueBook ? styles.crossVisible : styles.cross} src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/cross-25.png" alt=""/>
				<div className={styles.sortingBlock}>
					<div className={styles.categories}>
						<p className={styles.titleCategories}> Categories </p>
						<Form.Select onChange={(event) => dispatch(setCategory(event.target.value))} aria-label="Categories" style={{ fontSize: '16px', height: '35px', borderRadius: '5px' }}>
							{CATEGORIES.map((category, index) => <option key={index} value={`${category}`}> {category} </option>)}
						</Form.Select>
					</div>
					<div className={styles.sorting}>
						<p className={styles.titleSorting}> Sorting by </p>
						<Form.Select onChange={(event) => dispatch(setSort(event.target.value))} aria-label="Sorting by" style={{ fontSize: '16px', height: '35px', borderRadius: '5px', minWidth: '204px' }}>
							{SORT_CATEGORY.map((category, index) => <option key={index} value={`${category}`}> {category} </option>)}
						</Form.Select>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;