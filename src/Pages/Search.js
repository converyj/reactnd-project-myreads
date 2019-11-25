import React from "react";
import FilterBooks from "../components/FilterBooks";

/**
 * @description Holds the search bar and th filtered books on the Search page
 */
const Search = props => {
	return (
		<div>
			<FilterBooks books={props.books} moveBook={props.moveBook} />
		</div>
	);
};

export default Search;
