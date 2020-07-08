import React from "react";
import Joi from "joi-browser";
import { fetchOffices } from "../../services/officeService";
import { fetchParties } from "../../services/partyService";
import Form from "../../components/common/form";
import { registerCandidate } from "../../services/electionService";

class Politician extends Form {
	state = {
		data: { candidateName: "", party: "", office: "" },
		errors: {},
		offices: [],
		parties: [],
		status: "",
	};

	schema = {
		candidateName: Joi.string().required().label("CandidateName"),
		party: Joi.string().required().label("PartyName"),
		office: Joi.string().required().label("OfficeName"),
	};

	async componentDidMount() {
		const token = localStorage.getItem("Token");
		this.setState({
			offices: await fetchOffices(token),
			parties: await fetchParties(token),
		});
	}

	doSubmit = async () => {
		const { id: officeId } = this.state.offices.find(
			(office) => office.name === this.state.data.office
		);

		const { status } = await registerCandidate(officeId, {
			candidateName: this.state.data.candidateName,
		});

		this.setState({ status });
	};

	render() {
		const availableOffices = this.state.offices.map((office) => ({
			id: office.id,
			value: office.name,
			name: office.name,
		}));

		const availableParties = this.state.parties.map((party) => ({
			id: party.id,
			value: party.name,
			name: party.name,
		}));
		return (
			<div className="Form--section">
				<h4 className="Form__header">politician candidature</h4>
				{this.state.status === 200 ? (
					<p style={{ fontSize: "1.8rem", color: "green" }}>
						registered candidate successfully
					</p>
				) : (
					<form className="Form" onSubmit={this.handleSubmit}>
						{this.renderInput("candidateName", "Candidate Full Name")}
						{this.renderSelect("party", availableParties, "Party")}
						{this.renderSelect("office", availableOffices, "Office")}
						{this.renderButton("Place Candidature")}
					</form>
				)}
			</div>
		);
	}
}

export default Politician;
