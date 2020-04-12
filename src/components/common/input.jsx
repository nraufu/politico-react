import React from "react";

const Input = ({ name, placeholder, error, ...rest }) => {
	return (
		<div className="form-group">
			<input
				{...rest}
				name={name}
				placeholder={placeholder}
				className="form-control"
				required
			/>
			{error && <div className="alert alert-danger">{error}</div>}
		</div>
	);
};

export default Input;
