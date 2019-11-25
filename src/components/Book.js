import React from "react";
import PropTypes from "prop-types";

import MoveBookOptions from "./MoveBookOptions";

/**
 * @description Displays Book and passes props to moveBookOptions Component
 */
const Book = ({ bookInfo, moveBook }) => {
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
			</div>
		</li>
	);
};

Book.propTypes = {
	bookInfo: PropTypes.object.isRequired,
	moveBook: PropTypes.func.isRequired
};

export default Book;
