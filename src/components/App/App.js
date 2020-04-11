import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import Landing from "../Landing/Landing";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import Log from "../Admin/Log";
import PasswordRecover from "../Password/PasswordRecover";
import NotFound from "./../notFound";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Switch>
				<Route path="/signUp" component={SignUp} />
				<Route path="/signIn" component={SignIn} />
				<Route path="/adminLog" component={Log} />
				<Route path="/recoverPassword" component={PasswordRecover} />
				<Route path="/not-found" component={NotFound} />
				<Route path="/" exact component={Landing} />
				<Redirect to="/not-found" />
			</Switch>
		</div>
	);
}

export default App;
