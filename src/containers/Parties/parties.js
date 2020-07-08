import React, { Component } from "react";
import { fetchParties } from "./../../services/partyService";
import Table from "../../components/UI/Table/Table";
import Aux from "../../HOC/Auxiliary/Auxiliary";
import Button from "../../components/UI/Button/Button";
import Modal from "../../components/UI/Modal/Modal";
import AddParty from "./AddParty/AddParty";

class Parties extends Component {
	state = { parties: [], showModal: false };

	async componentDidMount() {
		const token = localStorage.getItem("Token");
		this.setState({ parties: await fetchParties(token) });
	}

	handleModal = () => {
		this.setState((prevState) => ({ showModal: !prevState.showModal }));
	};

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
				<tr style={{ textTransform: "uppercase" }}>
					<td>No Party Registered yet</td>
				</tr>
			);
		}

		return (
			<Aux>
				{this.props.user.isAdmin === "true" && (
					<div className="row">
						<Button
							label="Add Party"
							color="green"
							clicked={this.handleModal}
						/>
					</div>
				)}
				<Table body={tbody} tableType="parties" />
				<Modal show={this.state.showModal} clicked={this.handleModal}>
					{<AddParty />}
				</Modal>
			</Aux>
		);
	}
}

export default Parties;
