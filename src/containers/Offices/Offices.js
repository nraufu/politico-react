import React, { Component } from "react";
import Table from "../../components/UI/Table/Table";
import offices from "../../services/officeService";
import "./Offices.css";

class Offices extends Component {
	state = { offices: [] };

	componentDidMount() {
		this.setState({ offices: offices });
	}

	render() {
		const tbody = this.state.offices.map((office, index) => (
			<tr key={index}>
				<td>{office.name}</td>
				<td>{office.type}</td>
			</tr>
		));
		return <Table body={tbody} tableUser="offices" />;
	}
}

export default Offices;
