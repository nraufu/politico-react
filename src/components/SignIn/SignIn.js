import React from "react";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import Form from "./../common/form";

class SignIn extends Form {
	state = {
		data: { nationalId: "", password: "" },
		errors: {},
	};

	schema = {
		nationalId: Joi.number().required().label("National Id"),
		password: Joi.string().trim().required().label("Password"),
	};

	doSubmit = () => {
		window.location.href = "/parties";
	};

	render() {
		return (
			<div className="col-6 mx-auto bg-light rounded py-4">
				<h4 className="text-center py-2">SignIn</h4>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput("nationalId", "National Id")}
					{this.renderInput("password", "Password", "password")}
					{this.renderButton("Login")}
					<p className="text-dark mt-4">
						Forgot Password?{" "}
						<Link className="text-decoration-none" to="/recoverPassword">
							Recover Password
						</Link>
					</p>
				</form>
			</div>
		);
	}
}
export default SignIn;
