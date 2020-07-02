import React from "react";
import Joi from "joi-browser";
import Form from "../../components/common/form";
import { registerUser } from "./../../services/authService";

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
		window.location.href = "/parties";
	};

	render() {
		return (
			<div className="Form--section">
				<h4 className="Form__header">SignUp</h4>
				<form className="Form" onSubmit={this.handleSubmit}>
					{this.renderInput("names", "Full Name")}
					{this.renderInput("nationalId", "National Id")}
					{this.renderInput("email", "Email", "email")}
					{this.renderInput("password", "Password", "password")}
					{this.renderButton("Create Account")}
				</form>
			</div>
		);
	}
}
export default SignUp;
