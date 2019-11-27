import React from "react";
import PropTypes from "prop-types";

import MoveBookOptions from "./MoveBookOptions";
import ShowRatings from "./ShowRatings";
import AddRating from "./AddRating";

/**
 * @description Displays a book with an option to move book and ratings (both own and average) of each book 
 */
const Book = ({ bookInfo, moveBook }) => {
	return (
		<li>
			<div className='book'>
				<AddRating book={bookInfo} />
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
				<ShowRatings book={bookInfo} />
			</div>
		</li>
	);
};

Book.propTypes = {
	bookInfo: PropTypes.object.isRequired,
	moveBook: PropTypes.func.isRequired
};

export default Book;
