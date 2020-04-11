import React from "react";
import Joi from "joi-browser";
import Form from "./../common/form";

class PasswordRecover extends Form {
	state = {
		data: { email: "" },
		errors: {},
	};

	schema = {
		email: Joi.string().email().trim().required().label("Email"),
	};

	doSubmit = () => {
		this.props.history.push("/signIn");
	};

	render() {
		return (
			<main className="container">
				<div className="main main-home">
					<div className="form-group">
						<h2 className="log-title"> Recover Password </h2>
						<form className="form-group-form" onSubmit={this.handleSubmit}>
							{this.renderInput("email", "Enter Email")}
							{this.renderButton("Recover")}
						</form>
					</div>
				</div>
			</main>
		);
	}
}

export default PasswordRecover;
