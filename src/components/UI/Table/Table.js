import React from "react";

const Table = ({ body, tableType }) => {
	return (
		<div className="Table">
			<div className="table-container">
				<table>
					<thead>
						{tableType === "parties" ? (
							<tr>
								<th>Logo</th>
								<th>Party Name</th>
								<th>HQ Address</th>
							</tr>
						) : (
							<tr>
								<th>Office Name</th>
								<th>Office Type</th>
							</tr>
						)}
					</thead>
					<tbody>{body}</tbody>
				</table>
			</div>
		</div>
	);
};

export default Table;
