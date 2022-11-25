import React from "react";

const Filter = ({ changeHandler }) => {
	return <input type="text" name="filter" onChange={changeHandler}></input>;
};

export default Filter;
