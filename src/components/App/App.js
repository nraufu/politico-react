import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Landing from "../Landing/Landing";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import Parties from "./../Parties/parties";
import PasswordRecover from "../Password/PasswordRecover";
import Footer from "./../Footer/Footer";
import NotFound from "./../notFound";
import "./App.css";

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<div className="container main">
				<Switch>
					<Route path="/signUp" component={SignUp} />
					<Route path="/signIn" component={SignIn} />
					<Route path="/recoverPassword" component={PasswordRecover} />
					<Route path="/parties" component={Parties} />
					<Route path="/not-found" component={NotFound} />
					<Route path="/" exact component={Landing} />
					<Redirect to="/not-found" />
				</Switch>
			</div>
			<Footer />
		</React.Fragment>
	);
}

export default App;
