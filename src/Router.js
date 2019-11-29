import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Provider, { BookContext } from "./Provider/";

/**
 * @description Handle all the routes
 * pass global state to Home and Search components
 */

const Router = () => {
	return (
		<Provider>
			<Switch>
				<Route
					exact
					path='/'
					render={() => (
						<BookContext.Consumer>
							{context => <Home {...context} />}
						</BookContext.Consumer>
					)}
				/>

				<Route
					exact
					path='/search'
					render={() => (
						<BookContext.Consumer>
							{context => <Search {...context} />}
						</BookContext.Consumer>
					)}
				/>

				<Route render={() => <h1>Not Found</h1>} />
			</Switch>
		</Provider>
	);
};

export default Router;
