import React, { Component } from "react";
import { getParties } from "./../../services/partyService";

class Parties extends Component {
	state = { parties: [] };

	componentDidMount() {
		this.setState({ parties: getParties() });
	}

	render() {
		return (
			<div>
				<table className="table table-info table-hover rounded table-striped">
					<thead>
						<tr>
							<th scope="col">Logo</th>
							<th scope="col">Party Name</th>
							<th scope="col">HQ Address</th>
						</tr>
					</thead>
					<tbody>
						{this.state.parties.map((party, index) => (
							<tr key={index}>
								<td>
									<img src={party.logo} alt={party.partyName} />
								</td>
								<td>{party.partyName}</td>
								<td>{party.hqAddress}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Parties;
