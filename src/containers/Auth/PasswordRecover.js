import React from "react";
import Joi from "joi-browser";
import Form from "../../components/common/form";

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
			<div className="Form--section">
				<h4 className="Form__header">Recover</h4>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput("email", "Enter Email")}
					{this.renderButton("Recover")}
				</form>
			</div>
		);
	}
}

export default PasswordRecover;
