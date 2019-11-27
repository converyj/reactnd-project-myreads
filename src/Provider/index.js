import React, { Component } from "react";

// create context for global state
export const BookContext = React.createContext();

/**
 * @description Component responsible for holding the global state 
 * 
 * books - holds all the books loaded from the BookAPI
 * currentlyReading, wantToRead, read - holds all the books that match the shelf name 
 */
export default class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			books: [],
			currentlyReading: [],
			wantToRead: [],
			read: [],
			/** 
			 * @description Filter the books to the right array based on their shelf name and updated state
			 * 
			 * @param { array } books - JSON object that comes back from the BookAPI
			 * @public
			*/
			addBooks: books => {
				console.log(books);
				const currentlyReading = books.filter(
					book => book.shelf === "currentlyReading"
				);
				const read = books.filter(book => book.shelf === "read");
				const wantToRead = books.filter(
					book => book.shelf === "wantToRead"
				);

				this.setState({
					books,
					currentlyReading,
					read,
					wantToRead
				});
			},
			/**
			 * @description Handles moving books to different shelves and the 'none' option (which takes it off the shelf)
			 * 
			 * @params {string} bookId - the id of the book that is moved 
			 * @params {array} allShelves - returns all the book ids in each shelf 
			 * @params {string} newShelf - the shelf the book moves to 
			 * @public
			 */
			moveBook: (bookId, allShelves, newShelf) => {
				if (
					newShelf === "currentlyReading" ||
					newShelf === "wantToRead" ||
					newShelf === "read"
				) {
					// find the book id in books array from the allShelves object array
					const newBooks = this.state.books.map(book => {
						const foundId = allShelves[newShelf].find(
							bookId => bookId === book.id
						);

						// if book id is found assign it to the new shelf
						if (foundId) {
							book.shelf = newShelf;
						}

						// return the book that was modified to the newBooks array
						return book;
					});

					this.state.addBooks(newBooks); // call the addBooks method with the newBooks to update the shelves
				}
				else if (newShelf === "none") {
					console.log("none", bookId);

					// find the book id in the books array
					const newBooks = this.state.books.map(book => {
						const foundId = bookId === book.id;

						// if book id is found assign the shelf to 'none'
						if (foundId) {
							book.shelf = "none";
						}

						// return book that is modified
						return book;
					});
					console.log(newBooks);
					this.state.addBooks(newBooks); // call the addBooks to update the shelves
					console.log(this.state.books);
				}
			},
			addRating: (bookId, value) => {
				console.log(bookId, value);
				const newBooks = this.state.books.map(book => {
					const foundId = bookId === book.id;

					// if book id is found assign the shelf to 'none'
					if (foundId) {
						if (book.averageRating) {
							book.averageRating = value;
							console.log(book.averageRating);
						}
						else {
							book.averageRating = value;
						}
					}

					// return book that is modified
					return book;
				});
				console.log(newBooks);
				this.state.addBooks(newBooks); // call the addBooks to update the shelves
				console.log(this.state.books);
			}
		};
	}
	render() {
		return (
			// pass the state to consumers to access state
			<BookContext.Provider value={this.state}>
				{this.props.children}
			</BookContext.Provider>
		);
	}
}