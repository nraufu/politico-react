import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Landing from "../UI/Landing/Landing";
import SignUp from "../../containers/Auth/SignUp";
import SignIn from "../../containers/Auth/SignIn";
import Parties from "../../containers/Parties/parties";
import PasswordRecover from "../../containers/Auth/PasswordRecover";
import Footer from "./../UI/Footer/Footer";
import NotFound from "../UI/notFound";
import Aux from "../../HOC/Auxiliary/Auxiliary";
import "./App.css";

function App() {
	return (
		<Aux>
			<div className="App">
				<Navbar />
				<Switch>
					<Route path="/signUp" component={SignUp} />
					<Route path="/signIn" component={SignIn} />
					<Route path="/recoverPassword" component={PasswordRecover} />
					<Route path="/parties" component={Parties} />
					<Route path="/not-found" component={NotFound} />
					<Route path="/" exact component={Landing} />
					<Redirect to="/not-found" />
				</Switch>
				<Footer />
			</div>
		</Aux>
	);
}

export default App;
