import React from "react";
import { Link } from "react-router-dom";

/**
 * @description Holds the Search Button on the Home page to link to the Search page 
 */
const SearchBtn = () => {
	return (
		<div className='open-search'>
			<Link to='/search'>
				<button>Add a book</button>
			</Link>
		</div>
	);
};

export default SearchBtn;
