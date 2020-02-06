import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Pages/Home";
import Search from "./Pages/Search";
import { BookContext } from "./Provider/";
import NoMatch from "./components/NoMatch";

/**
 * @description Handle all the routes
 * pass global state to Home and Search components
 */

const Router = () => {
	return (
		<Switch>
			<Route
				exact
				path="/"
				render={() => (
					<BookContext.Consumer>
						{(context) => <Home {...context} />}
					</BookContext.Consumer>
				)}
			/>

			<Route
				exact
				path="/search"
				render={() => (
					<BookContext.Consumer>
						{(context) => <Search {...context} />}
					</BookContext.Consumer>
				)}
			/>
			<Route component={NoMatch} />
		</Switch>
	);
};

export default Router;
