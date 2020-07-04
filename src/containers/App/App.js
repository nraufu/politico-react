import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Landing from "../../components/UI/Landing/Landing";
import SignUp from "../Auth/SignUp";
import SignIn from "../Auth/SignIn";
import Parties from "../Parties/parties";
import PasswordRecover from "../Auth/PasswordRecover";
import Footer from "../../components/UI/Footer/Footer";
import NotFound from "../../components/UI/notFound";
import Aux from "../../HOC/Auxiliary/Auxiliary";
import Offices from "../Offices/Offices";
import Logout from "../Auth/Logout";
import { getCurrentUser } from "../../services/authService";
import "./App.css";

class App extends Component {
	state = { user: {} };

	componentDidMount() {
		this.setState({ user: getCurrentUser() });
	}

	render() {
		let token = localStorage.getItem("Token");
		let routes = (
			<Switch>
				<Route path="/signUp" component={SignUp} />
				<Route path="/signIn" component={SignIn} />
				<Route path="/recoverPassword" component={PasswordRecover} />
				<Route path="/" exact component={Landing} />
				<Redirect to="/" />
			</Switch>
		);

		if (token) {
			routes = (
				<Switch>
					<Route path="/parties" component={Parties} />
					<Route path="/offices" component={Offices} />
					<Route path="/logout" component={Logout} />
					<Route path="/" exact component={Parties} />
					<Redirect to="/" />
				</Switch>
			);
		}
		return (
			<Aux>
				<div className="App">
					<Navbar user={this.state.user} />
					{routes}
					<Footer />
				</div>
			</Aux>
		);
	}
}

export default App;