import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import Router from "./Router";

/**
 * Application Component to hold the Home and Search pages
 */
class BooksApp extends React.Component {
	render() {
		return (
			<div className='app'>
				<Router />
			</div>
		);
	}
}

export default BooksApp;
