import React from "react";
import PropTypes from "prop-types";

import MoveBookOptions from "./MoveBookOptions";
import ShowRatings from "./ShowRatings";

/**
 * @description Displays a book with an option to move book and rating of each book 
 */
const Book = ({ bookInfo, moveBook, addRating, onShelf }) => {
	return (
		<li>
			<div className='book'>
				<div className='book-top'>
					<div
						className='book-cover'
						style={{
							width: 128,
							height: 193,
							backgroundImage: `url(${
								bookInfo.imageLinks ? bookInfo.imageLinks
									.thumbnail :
								""})`
						}}
					/>
					<MoveBookOptions
						book={bookInfo}
						shelf={bookInfo.shelf}
						moveBook={moveBook}
					/>
				</div>

				<div className='book-title'>{bookInfo.title}</div>
				<div className='book-authors'>
					{
						bookInfo.authors ? bookInfo.authors[0] :
						"No Author"}
				</div>
				<ShowRatings
					book={bookInfo}
					addRating={addRating}
					onShelf={onShelf}
				/>
			</div>
		</li>
	);
};

Book.propTypes = {
	bookInfo: PropTypes.object.isRequired,
	moveBook: PropTypes.func.isRequired,
	onShelf: PropTypes.bool.isRequired
};

export default Book;
