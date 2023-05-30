import React from 'react';
import styles from './Header.module.scss';
import Form from 'react-bootstrap/Form';
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setInputValueBook} from "../../store/slices/searchSlice.js";
import {categories} from "../../const.js";

const Header = () => {
	const inputValueBook = useSelector(state => state.searchSlice.inputValueBook);
	const category = useSelector(state => state.searchSlice.category);
	const dispatch = useDispatch();
	
	return (
		<div>
			<div className={styles.wrapper}>
				<p className={styles.title}> Search for books </p>
				<input value={inputValueBook} onChange={(event) => dispatch(setInputValueBook(event.target.value))} className={styles.input} placeholder={"Попробуйте искать книгу..."} type="text"/>
				<img onClick={() => dispatch(setInputValueBook(''))} className={inputValueBook ? styles.crossVisible : styles.cross} src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/cross-25.png" alt=""/>
				<div className={styles.sortingBlock}>
					<div className={styles.categories}>
						<p className={styles.titleCategories}> Categories </p>
						<Form.Select onChange={(event) => dispatch(setCategory(event.target.value))} aria-label="Categories" style={{ fontSize: '16px', height: '35px', borderRadius: '5px' }}>
							{categories.map((category, index) => <option key={index} value={`${category}`}> {category} </option>)}
						</Form.Select>
					</div>
					<div className={styles.sorting}>
						<p className={styles.titleSorting}> Sorting by </p>
						<Form.Select aria-label="Sorting by" style={{ fontSize: '16px', height: '35px', borderRadius: '5px' }}>
							<option>Open this select menu</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</Form.Select>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;