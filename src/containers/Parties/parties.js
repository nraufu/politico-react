import React, { Component } from "react";
import { getParties } from "./../../services/partyService";
import "./Parties.css";

class Parties extends Component {
	state = { parties: [] };

	componentDidMount() {
		this.setState({ parties: getParties() });
	}

	render() {
		return (
			<section className="Table">
				<div className="table-container">
					<table>
						<thead>
							<tr>
								<th>Logo</th>
								<th>Party Name</th>
								<th>HQ Address</th>
							</tr>
						</thead>
						<tbody>
							{this.state.parties.map((party, index) => (
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
							))}
						</tbody>
					</table>
				</div>
			</section>
		);
	}
}

export default Parties;
