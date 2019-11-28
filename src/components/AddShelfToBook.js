import React from "react";

import Book from "./Book";

/**
 * @description Set the books to the proper shelf call the Book Component  
 */
const AddShelfToBook = ({ books, filteredBooks, moveBook }) => {
	return (
		<div>
			<ol className='books-grid'>
				{// if there are books in the filteredBooks array that are already on the shelf, change its shelf otherwise set it to 'none'


					filteredBooks &&
					filteredBooks.length > 0 ? filteredBooks.map(book => {
						const foundShelf = books.find(
							searchBook => searchBook.id === book.id
						);

						if (foundShelf) {
							book.shelf = foundShelf.shelf;
						}
						else {
							book.shelf = "none";
						}

						// return books from the filteredBooks that have been modified and call the Book Component to display the books
						return (
							<Book
								key={book.id}
								bookInfo={book}
								moveBook={moveBook}
							/>
						);
					}) :
					<div>
						<h1>No Books Found</h1>
					</div>}
			</ol>
		</div>
	);
};

export default AddShelfToBook;
