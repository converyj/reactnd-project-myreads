import React, { Component } from "react";
import PropTypes from "prop-types";

import { update } from "../BooksAPI";

/**
 * @description Each book has a control that lets you select the shelf for that book. Default value for the control should always be the current shelf the book is on
 * 
 * keeps the shelf of current book in state so change in shelf is selected
 */
class MoveBookOptions extends Component {
	state = {
		shelf: this.props.shelf
	};

	/**
	 * @description Handle when the book is about to move to different shelf 
	 * 
	 * @param {object} e - event of what was pressed (select menu)
	 */
	handleMove = e => {
		const bookId = this.props.book.id;
		const book = this.props.book;
		const newShelf = e.target.value;
		console.log(book, newShelf);
		this.setState({ shelf: newShelf }); // updates the shelf so component re-renders with new shelf selected

		/**
		 * @description Returns the book ids on all shelves
		 * 
		 * @param {object} book - containing at minimum an `id` attribute
		 * @param {string} shelf - contains one of ["wantToRead", "currentlyReading", "read"]
		 * 
		 * @returns Returns a Promise which resolves to a JSON object containing the response data of the POST request */

		update(book, newShelf).then(allShelves => {
			this.props.moveBook(bookId, allShelves, newShelf);
		});
	};
	render() {
		const { shelf } = this.state;

		return (
			<div className='book-shelf-changer'>
				<select onChange={this.handleMove} value={shelf}>
					{/* default selected value is current shelf */}
					<option value='move' disabled>
						Move to...
					</option>
					<option value='currentlyReading'>Currently Reading</option>
					<option value='wantToRead'>Want to Read</option>
					<option value='read'>Read</option>
					<option value='none'>None</option>
				</select>
			</div>
		);
	}
}

MoveBookOptions.propTypes = {
	book: PropTypes.object.isRequired,
	shelf: PropTypes.string.isRequired,
	moveBook: PropTypes.func.isRequired
};

export default MoveBookOptions;
