import React from "react";
import PropTypes from "prop-types";

import Book from "./Book";

/**
 * @description Display Shelf and pass props to Book Component 
 */
const Shelf = props => {
	console.log(props);
	return (
		<div className='bookshelf'>
			<h2 className='bookshelf-title'>{props.title}</h2>
			<div className='bookshelf-books'>
				<ol className='books-grid'>
					{props.books.map(book => (
						<Book
							key={book.id}
							bookInfo={book}
							moveBook={props.moveBook}
						/>
					))}
				</ol>
			</div>
		</div>
	);
};

Shelf.propTypes = {
	books: PropTypes.array.isRequired,
	title: PropTypes.string.isRequired,
	moveBook: PropTypes.func.isRequired
};

export default Shelf;
