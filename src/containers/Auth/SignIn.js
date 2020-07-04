import React from "react";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import Form from "../../components/common/form";
import { login } from "../../services/authService";

class SignIn extends Form {
	state = {
		data: { national_id: "", password: "" },
		errors: {},
	};

	schema = {
		national_id: Joi.number().required().label("National Id"),
		password: Joi.string().trim().required().label("Password"),
	};

	doSubmit = async () => {
		const { token } = await login(this.state.data);
		localStorage.setItem("Token", token);
		window.location = "/parties";
	};

	render() {
		return (
			<div className="Form--section">
				<h4 className="Form__header">SignIn</h4>
				<form className="Form" onSubmit={this.handleSubmit}>
					{this.renderInput("national_id", "National Id")}
					{this.renderInput("password", "Password", "password")}
					{this.renderButton("Login")}
					<p className="Form__paragraph">
						Forgot Password?{" "}
						<Link className="Form__Link" to="/recoverPassword">
							Recover Password
						</Link>
					</p>
				</form>
			</div>
		);
	}
}
export default SignIn;
