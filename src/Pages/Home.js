import React, { Component } from "react";

import Shelf from "../components/Shelf";
import Spinner from "../components/Spinner";
import { getAll } from "../BooksAPI";
import SearchBtn from "../components/SearchBtn";

/**
 * @description Holds all the shelves (currentlyReading, wantToRead, read) and Search Button 
 * Passes neccessary props to the Shelf Components
 * use this.props to access global state
 */
class Home extends Component {
	state = {
		shelves: []
	};

	// when component is loaded in DOM, fetch books from BooksAPI
	componentDidMount() {
		getAll().then(books => {
			this.props.addBooks(books);
		});
	}

	render() {
		const {
			currentlyReading,
			books,
			wantToRead,
			read,
			moveBook,
			addRating
		} = this.props;
		return (
			<div className='list-books'>
				<div className='list-books-title'>
					<h1>MyReads</h1>
				</div>
				<div className='list-books-content'>
					{
						!books || books.length === 0 ? <Spinner /> :
						<React.Fragment>
							<Shelf
								books={currentlyReading}
								title='Currently Reading'
								moveBook={moveBook}
								addRating={addRating}
							/>
							<Shelf
								books={wantToRead}
								title='Want To Read'
								moveBook={moveBook}
								addRating={addRating}
							/>
							<Shelf
								books={read}
								title='Read'
								moveBook={moveBook}
								addRating={addRating}
							/>
						</React.Fragment>}
				</div>
				<SearchBtn />
			</div>
		);
	}
}

export default Home;
