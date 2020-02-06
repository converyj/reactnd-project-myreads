import React from "react";

import spinner from "./spinner.gif";

/**
 * @description Holds the Loading image when waiting for books to be fetched from the BookAPI
 */
export default () => {
	return (
		<div>
			<img
				src={spinner}
				alt='Loading...'
				style={{
					width: "200px",
					margin: "40px auto",
					display: "block"
				}}
			/>
		</div>
	);
};
