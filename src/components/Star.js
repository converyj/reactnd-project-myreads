import React from "react";
import PropTypes from "prop-types";

import fullStar from "../icons/full-star.png";
import halfStar from "../icons/half-star.png";
import emptyStar from "../icons/empty-star.png";

/**
 * @description Display rating stars either of own ratings or average ratings 
 */
const Star = ({ value, onClick }) => {
	let stars;
	let src;

	/**
	 * @description stores the star rating of each book in array by getting the value either from Local Storage or book object 
	 * 
	 * @returns array with the types of stars to display
	 */
	const getStars = () => {
		let stars = [];
		let halfDone = false;

		for (let i = 1; i <= 5; i++) {
			if (i <= value) {
				stars.push("fs");
			}
			else if (i > value && value % 1 !== 0 && !halfDone) {
				stars.push("hs");
				halfDone = true;
			}
			else {
				stars.push("es");
			}
		}
		return stars;
	};
	return (
		<div>
			{
				(stars = getStars().map((star, index) => {
					if (star === "fs") src = fullStar;
					else if (star === "hs") src = halfStar;
					else src = emptyStar;

					return (
						<img
							key={index}
							value={index}
							src={src}
							alt='rating'
							width='20'
							onClick={onClick && (() => onClick(index))} // enable click handler only if showing own ratings
						/>
					);
				}))
			}
		</div>
	);
};

Star.propTypes = {
	value: PropTypes.number.isRequired,
	onClick: PropTypes.func
};

export default Star;
