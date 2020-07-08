import React, { Component } from "react";
import Table from "../../components/UI/Table/Table";
import { fetchOffices } from "../../services/officeService";
import Aux from "../../HOC/Auxiliary/Auxiliary";
import Button from "../../components/UI/Button/Button";
import Modal from "../../components/UI/Modal/Modal";
import AddOffice from "./AddOffice/AddOffice";

class Offices extends Component {
	state = { offices: [], showModal: false };

	async componentDidMount() {
		const token = localStorage.getItem("Token");
		this.setState({ offices: await fetchOffices(token) });
	}

	handleModal = () => {
		this.setState((prevState) => ({ showModal: !prevState.showModal }));
	};

	render() {
		let tbody = (
			<tr style={{ textTransform: "uppercase" }}>
				<td>No Office Registered yet</td>
			</tr>
		);

		if (this.state.offices.length > 0) {
			tbody = this.state.offices.map((office) => (
				<tr key={office.id}>
					<td>{office.name}</td>
					<td>{office.type}</td>
				</tr>
			));
		}
		return (
			<Aux>
				{this.props.user.isAdmin === "true" ? (
					<div className="row">
						<Button
							label="Add Office"
							color="green"
							clicked={this.handleModal}
						/>
					</div>
				) : (
					""
				)}
				<Table body={tbody} tableUser="offices" />;
				<Modal show={this.state.showModal} clicked={this.handleModal}>
					{<AddOffice />}
				</Modal>
			</Aux>
		);
	}
}

export default Offices;
