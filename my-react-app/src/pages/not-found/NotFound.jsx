import React from 'react';
import styles from './NotFound.module.scss';
const NotFound = () => {
	return (
		<>
			<div className={styles.wrapper}>
				<img className={styles.imgError} src="https://img.icons8.com/?size=512&id=Qsc8ynNZvB1p&format=png" alt=""/>
				<p className={styles.title}> Oh no, the page was not found! </p>
			</div>
		</>
	);
};

export default NotFound;