import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import Spinner from "./Spinner";
import AddShelfToBook from "./AddShelfToBook";

/**
 * @description Display the search input field to filter books based on search query 
 * 
 * query - holds the query from the text input
 * filteredBooks - holds the books that are returned from the search function 
 */
class FilterBooks extends Component {
	state = {
		query: "",
		filteredBooks: []
	};
	/**
	 * populate the books from search query into filteredBooks array 
	 * 
	 * @param {object} e - event of what was pressed (search input field)
	 */
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
