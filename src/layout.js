import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Character from "./components/Character";
import Home from "./components/Home";
import injectStore from "./store/appContext";

export class Layout extends React.Component {
	render() {
		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/character/:id" component={Character} />
						<Route render={() => <h1>Not found!</h1>} ></Route>
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectStore(Layout);