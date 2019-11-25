import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import Spinner from "./Spinner";
import AddShelfToBook from "./AddShelfToBook";

/**
 * @description Filters the books by calling the search function from the BooksAPI passing in the query 
 * 
 * query - holds the query from the text input
 * filteredBooks - holds the books that are returned from the search function 
 */
class FilterBooks extends Component {
	state = {
		query: "",
		filteredBooks: []
	};

	handleChange = e => {
		const query = e.target.value;
		this.setState({ query });
		if (query) {
			// if there is a query
			search(query).then(books => {
				this.setState({
					filteredBooks: books
				});
			});
			return <Spinner />;
		}
		else {
			this.setState({ filteredBooks: [] });
		}
	};

	render() {
		const { query, filteredBooks } = this.state;
		const { books, moveBook } = this.props;
		return (
			<React.Fragment>
				<div className='search-books-bar'>
					<Link to='/'>
						<div className='close-search' />
					</Link>
					<div className='search-books-input-wrapper'>
						<input
							type='text'
							name='term'
							placeholder='Search for Title or Author'
							value={query}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className='search-books-results'>
					<AddShelfToBook
						books={books}
						filteredBooks={filteredBooks}
						moveBook={moveBook}
					/>
				</div>
			</React.Fragment>
		);
	}
}

FilterBooks.propTypes = {
	books: PropTypes.array.isRequired,
	moveBook: PropTypes.func.isRequired
};

export default FilterBooks;
