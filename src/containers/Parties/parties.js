import React, { Component } from "react";
import fetchParties from "./../../services/partyService";
import Table from "../../components/UI/Table/Table";
import "./Parties.css";

class Parties extends Component {
	state = { parties: [] };

	async componentDidMount() {
		const token = localStorage.getItem("Token");
		this.setState({ parties: await fetchParties(token) });
	}

	render() {
		let tbody = this.state.parties.map((party) => (
			<tr key={party.id}>
				<td>
					<img src={party.logourl} alt="Party Logo" className="Table__img" />
				</td>
				<td></td>
				<td>{party.name}</td>
				<td></td>
				<td>{party.hqaddress}</td>
			</tr>
		));

		if (this.state.parties.length <= 0) {
			tbody = (
				<tr style={{ textAlign: "center" }}>
					<td>No Party Found in The database</td>
				</tr>
			);
		}

		return <Table body={tbody} tableType="parties" />;
	}
}

export default Parties;
