import React from "react";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import Form from "./../common/form";
import "./SignIn.css";

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
		this.props.history.replace("/");
	};

	render() {
		return (
			<main className="container">
				<div className="main main-home">
					<div className="form-group">
						<h2 className="log-title">SignIn</h2>
						<form
							className="form-group-form js-form-login"
							onSubmit={this.handleSubmit}
						>
							{this.renderInput("nationalId", "National Id")}
							{this.renderInput("password", "Password", "password")}
							{this.renderButton("Login")}
							<p className="alternate">
								Forgot Password?
								<Link className="form-btn--alternate" to="/recoverPassword">
									Recover Password
								</Link>
							</p>
						</form>
					</div>
				</div>
			</main>
		);
	}
}
export default SignIn;
