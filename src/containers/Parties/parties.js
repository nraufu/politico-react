import React, { Component } from "react";
import { getParties } from "./../../services/partyService";
import Table from "../../components/UI/Table/Table";
import "./Parties.css";

class Parties extends Component {
	state = { parties: [] };

	componentDidMount() {
		this.setState({ parties: getParties() });
	}

	render() {
		const tbody = this.state.parties.map((party, index) => (
			<tr key={index}>
				<td>
					<img
						src={party.logo}
						alt={party.partyName}
						className="Table__img"
						width="25px"
						height="25px"
					/>
				</td>
				<td>{party.partyName}</td>
				<td>{party.hqAddress}</td>
			</tr>
		));
		return <Table body={tbody} tableType="parties" />;
	}
}

export default Parties;
