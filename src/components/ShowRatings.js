import React, { Component } from "react";
import PropTypes from "prop-types";

import Star from "./Star";

/**
 * @description Displays the average rating of each book 
 */
class ShowRatings extends Component {
	render() {
		const { book } = this.props;
		return (
			<div>
				<span>Average Rating:</span>
				<Star
					value={

							book.averageRating ? book.averageRating :
							0
					}
				/>
			</div>
		);
	}
}

ShowRatings.propTypes = {
	book: PropTypes.object.isRequired
};

export default ShowRatings;
