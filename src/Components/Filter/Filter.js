import React from "react";
import css from "./Filter.module.css";

const Filter = ({ changeHandler }) => {
	return (
		<div className={css["container"]}>
			<span>Find contacts by name</span>
			<input
				type="text"
				name="filter"
				onChange={changeHandler}
				className={css["filter-input"]}
			></input>
		</div>
	);
};

export default Filter;
