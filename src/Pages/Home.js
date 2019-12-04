import React, { Component } from "react";

import Shelf from "../components/Shelf";
import Spinner from "../components/Spinner";
import { getAll } from "../BooksAPI";
import SearchBtn from "../components/SearchBtn";

// array of shelves to add - to only pass 1 shelf at a time
const shelves = [
	{
		title: "Currently Reading",
		key: "currentlyReading"
	},
	{
		title: "Want To Read",
		key: "wantToRead"
	},
	{ title: "Read", key: "read" }
];

/**
 * @description Holds all the shelves (currentlyReading, wantToRead, read) and Search Button
 * Passes neccessary props to the Shelf Components
 * use this.props to access global state
 */
class Home extends Component {
	// when component is loaded in DOM, fetch books from BooksAPI
	componentDidMount() {
		getAll().then(books => {
			this.props.addBooks(books);
		});
	}

	render() {
		const { books, moveBook } = this.props;
		return (
			<div className='list-books'>
				<div className='list-books-title'>
					<h1>MyReads</h1>
				</div>
				<div className='list-books-content'>
					{
						!books || books.length === 0 ? <Spinner /> :
						shelves.map((shelf, index) => (
							<Shelf
								key={index}
								books={this.props[shelf.key]} // same as array of books
								title={shelf.title}
								moveBook={moveBook}
							/>
						))}
				</div>
				<SearchBtn />
			</div>
		);
	}
}

export default Home;
