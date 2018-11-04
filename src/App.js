import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { Container } from "reactstrap";

const App = () => (
	<Router>
		<Fragment>
			<Nav />
			<Container>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/index" component={Home} />
				<Route component={NoMatch} />
			</Switch>
			</Container>
		</Fragment>
	</Router>
)

export default App;
