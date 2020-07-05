import React, { Component } from "react";
import Table from "../../components/UI/Table/Table";
import fetchOffices from "../../services/officeService";
import "./Offices.css";

class Offices extends Component {
	state = { offices: [] };

	async componentDidMount() {
		const token = localStorage.getItem("Token");
		this.setState({ offices: await fetchOffices(token) });
	}

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
		return <Table body={tbody} tableUser="offices" />;
	}
}

export default Offices;
