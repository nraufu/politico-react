import React from "react";
import Joi from "joi-browser";
import Form from "./../common/form";
import { users, registerUser } from "./../../services/authService";
import "./SignUp.css";

class SignUp extends Form {
	state = {
		data: {
			names: "",
			nationalId: "",
			email: "",
			password: "",
		},
		errors: {},
	};

	schema = {
		names: Joi.string().required().label("Full name"),
		nationalId: Joi.number().required().label("National Id"),
		email: Joi.string().email().trim().required().label("Email"),
		password: Joi.string().trim().required().label("Password"),
	};

	doSubmit = () => {
		registerUser(this.state.data);
		this.props.history.push("/");
		console.log(users);
	};

	render() {
		return (
			<main className="container">
				<div className="main main-home">
					<div className="container">
						<div className="form-group">
							<h2 className="log-title">SignUp </h2>
							<form
								className="form-group-form js-form-login"
								onSubmit={this.handleSubmit}
							>
								{this.renderInput("names", "Full Name")}
								{this.renderInput("nationalId", "National Id")}
								{this.renderInput("email", "Email", "email")}
								{this.renderInput("password", "Password", "password")}
								{this.renderButton("Create Account")}
							</form>
						</div>
					</div>
				</div>
			</main>
		);
	}
}
export default SignUp;
