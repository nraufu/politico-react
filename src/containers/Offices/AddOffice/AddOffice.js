import React from "react";
import Joi from "joi-browser";
import Form from "../../../components/common/form";
import { addOffice } from "../../../services/officeService";
import Aux from "../../../HOC/Auxiliary/Auxiliary";

class AddOffice extends Form {
	state = {
		data: {
			type: "",
			name: "",
		},
		errors: {},
		status: "",
	};

	schema = {
		type: Joi.string().required().label("Office Type"),
		name: Joi.string().required().label("Office Name"),
	};

	doSubmit = async () => {
		const token = localStorage.getItem("Token");
		const { status } = await addOffice(this.state.data, token);
		this.setState({ status });
	};
	render() {
		return (
			<div className="Popup__content">
				{this.state.status === 201 ? (
					<p style={{ fontSize: "1.8rem", color: "green" }}>
						Office Successfully registered
					</p>
				) : (
					<Aux>
						<h4 className="Form__header">Add Office</h4>
						<form className="Form" onSubmit={this.handleSubmit}>
							{this.renderInput("type", "Office Type")}
							{this.renderInput("name", "Office Name")}
							{this.renderButton("Create")}
						</form>
					</Aux>
				)}
			</div>
		);
	}
}

export default AddOffice;
