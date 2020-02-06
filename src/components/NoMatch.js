/*
NoMatch Component: 
 - Show error if user tries to access wrong url 
*/

import React from "react";

const NoMatch = () => {
	return (
		<div style={{ textAlign: "center", fontSize: 22 }}>
			<h5>404 Match Error</h5>
			<p>Sorry URL does not exist. Please Try Again.</p>
		</div>
	);
};

export default NoMatch;
