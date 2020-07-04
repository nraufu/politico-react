import React from "react";
import Joi from "joi-browser";
import Form from "../../components/common/form";
import { registerUser } from "./../../services/authService";

class SignUp extends Form {
	state = {
		data: {
			fullName: "",
			national_id: "",
			phoneNumber: "",
			passportUrl: "",
			email: "",
			password: "",
		},
		errors: {},
	};

	schema = {
		fullName: Joi.string().required().label("Full name"),
		national_id: Joi.number().required().label("National Id"),
		phoneNumber: Joi.number().required().label("National Id"),
		passportUrl: Joi.string().required().label("National Id"),
		email: Joi.string().email().trim().required().label("Email"),
		password: Joi.string().trim().required().label("Password"),
	};

	doSubmit = async () => {
		const { token } = await registerUser(this.state.data);
		localStorage.setItem("Token", token);
		window.location = "/parties";
	};

	render() {
		return (
			<div className="Form--section">
				<h4 className="Form__header">SignUp</h4>
				<form className="Form" onSubmit={this.handleSubmit}>
					{this.renderInput("fullName", "Full Name")}
					{this.renderInput("national_id", "National Id")}
					{this.renderInput("phoneNumber", "Phone Number")}
					{this.renderInput("passportUrl", "PassportUrl")}
					{this.renderInput("email", "Email", "email")}
					{this.renderInput("password", "Password", "password")}
					{this.renderButton("Create Account")}
				</form>
			</div>
		);
	}
}
export default SignUp;
