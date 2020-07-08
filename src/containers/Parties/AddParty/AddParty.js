import React from "react";
import Joi from "joi-browser";
import Form from "../../../components/common/form";
import { addParty } from "../../../services/partyService";
import Aux from "../../../HOC/Auxiliary/Auxiliary";

class AddParty extends Form {
	state = {
		data: {
			logoUrl: "",
			name: "",
			hqAddress: "",
		},
		errors: {},
		status: "",
	};

	schema = {
		logoUrl: Joi.string().required().label("logo Url"),
		name: Joi.string().required().label("Party Name"),
		hqAddress: Joi.string().required().label("Party Name"),
	};

	doSubmit = async () => {
		const token = localStorage.getItem("Token");
		const { status } = await addParty(this.state.data, token);
		this.setState({ status });
	};
	render() {
		return (
			<div className="Popup__content">
				{this.state.status === 200 ? (
					<p style={{ fontSize: "1.8rem", color: "green" }}>
						Party Successfully created
					</p>
				) : (
					<Aux>
						<h4 className="Form__header">Add Party</h4>
						<form className="Form" onSubmit={this.handleSubmit}>
							{this.renderInput("logoUrl", "Logo Url")}
							{this.renderInput("name", "Party Name")}
							{this.renderInput("hqAddress", "Headquarter Address")}
							{this.renderButton("Create")}
						</form>
					</Aux>
				)}
			</div>
		);
	}
}

export default AddParty;
