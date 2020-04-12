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
			<div className="col-6 mx-auto bg-light rounded py-4">
				<h4 className="text-center py-2">Recover</h4>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput("email", "Enter Email")}
					{this.renderButton("Recover")}
				</form>
			</div>
		);
	}
}

export default PasswordRecover;
