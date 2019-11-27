import React, { Component } from "react";
import PropTypes from "prop-types";

import fullStar from "../icons/full-star.png";
import halfStar from "../icons/half-star.png";
import emptyStar from "../icons/empty-star.png";

/**
 * @description Displays the rating of each book 
 */
class ShowRatings extends Component {
	/**
	 * @description stores the star rating of each book in array by getting the rating from book object 
	 * 
	 * @param {object} book - the current book object 
	 */
	getStars = book => {
		console.log(book.id);
		let value =
			book.averageRating ? book.averageRating :
			0;
		console.log(value);
		let stars = [];
		let halfDone = false;
		value = this.props.book.averageRating;

		for (let i = 1; i <= 5; i++) {
			if (i <= value) {
				console.log("< value");
				stars.push("fs");
			}
			else if (i > value && value % 1 != 0 && !halfDone) {
				console.log("> value andh helf");
				stars.push("hs");
				halfDone = true;
			}
			else {
				console.log("eslse if");
				stars.push("es");
			}
		}
		console.log(stars);
		return stars;
	};

	render() {
		let stars;
		let src;
		const { book } = this.props;
		return (
			<div>
				{
					(stars = this.getStars(book).map((star, index) => {
						if (star === "fs") src = fullStar;
						else if (star === "hs") src = halfStar;
						else src = emptyStar;

						return (
							<img
								key={index}
								src={src}
								alt='rating'
								width='20'
							/>
						);
					}))
				}
				<span>
					({
						book.ratingsCount ? book.ratingsCount :
						0})
				</span>
			</div>
		);
	}
}

ShowRatings.propTypes = {
	book: PropTypes.object.isRequired
};

export default ShowRatings;
