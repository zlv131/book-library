import React from 'react';
import styles from './Header.module.scss';
import Form from 'react-bootstrap/Form';
import {useDispatch, useSelector} from "react-redux";
import {setInputValueBook} from "../../store/slices/searchSlice.js";

const Header = () => {
	const inputValueBook = useSelector(state => state.searchSlice.inputValueBook);
	const dispatch = useDispatch();
	console.log(inputValueBook);
	
	return (
		<div>
			<div className={styles.wrapper}>
				<p className={styles.title}> Search for books </p>
				<input value={inputValueBook} onChange={(event) => dispatch(setInputValueBook(event.target.value))} className={styles.input} placeholder={"Попробуйте искать книгу..."} type="text"/>
				<div className={styles.sortingBlock}>
					<div className={styles.categories}>
						<p className={styles.titleCategories}> Categories </p>
						<Form.Select aria-label="Categories" style={{ fontSize: '16px', height: '35px', borderRadius: '5px' }}>
							<option> all </option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
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