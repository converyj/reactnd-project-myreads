import React, { Component } from "react";
import PropTypes from "prop-types";

import fullStar from "../icons/full-star.png";
import emptyStar from "../icons/empty-star.png";

/**
 * @description Displays the rating of each book and allows user to change the rating if the book is on their shelf 
 */
class ShowRatings extends Component {
	static propTypes = {
		prop: PropTypes
	};

	// state = {
	// 	rating:
	// 		localStorage.getItem(this.props.book.id) ? parseInt(
	// 			localStorage.getItem(this.props.book.id)
	// 		) :
	// 		this.props.book.ratingsCount
	// };

	/**
	 * @description stores the star rating of each book in array by getting the rating from either the book object or Local Storage (allows to persist data between refreshes)
	 * 
	 * @param {object} book - the current book object 
	 */
	getStars = book => {
		console.log(book.id);
		let value;
		let stars = [];
		if (localStorage.getItem(book.id)) {
			console.log("localStorage");
			// get value from Local Storage if exists or book object
			value =
				localStorage.getItem(this.props.book.id) ? parseInt(
					localStorage.getItem(this.props.book.id)
				) :
				this.props.book.averageRating;
			console.log(value);
		}
		else {
			value =
				book.averageRating ? book.averageRating :
				0;
		}

		let done = false;
		console.log(value);
		for (let i = 0; i < 5; i++) {
			// loop 5 times to display five stars
			console.log(i);
			if (value < 5) {
				// if more than 5 ratings, give the book 5/5 stars
				console.log("> 5");
				stars.push("fs");
			}
			else if (value < 5) {
				// if less than 5, give the book #/5 stars
				console.log("<5");
				console.log(done);
				if (!done) {
					for (let j = 0; j < value; j++) {
						// loop until ratings
						console.log(done, value);
						if (!done) {
							// flag that tells if done or not so you don't come back in loop and set another star
							console.log(j);
							stars.push("fs");
							i++; // increment i for each rate that gets fills so it is up to date
							if (j + 1 === value) {
								done = true;
							}
						}
					}
				}
				stars.push("es"); // if no ratings left
			}
		}
		console.log(stars);
		return stars;
	};

	/**
	 * @description Calls the addRating method which updates the rating count by passing in the bookId and the value of the rate
	 */
	handleClick = e => {
		const bookId = this.props.book.id;
		const number = parseInt(e.target.id) + 1;
		console.log(number);
		this.props.addRating(bookId, number);
		localStorage.setItem(bookId, number);
		// this.setState({ rating: localStorage.getItem(bookId) });
	};

	render() {
		let stars;
		let src;
		const { book } = this.props;
		return (
			<div>
				{
					// loop through the array and display the star images
					(stars = this.getStars(book).map((star, index) => {
						src =

								star === "fs" ? fullStar :
								emptyStar;

						return (
							<img
								id={index}
								className={this.props.onShelf && "ratings"}
								key={index}
								src={src}
								alt='rating'
								width='20'
								onClick={this.props.onShelf && this.handleClick}
							/>
						);
					}))
				}
			</div>
		);
	}
}

export default ShowRatings;
