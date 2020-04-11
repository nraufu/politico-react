import React from "react";

const Input = ({ name, placeholder, error, ...rest }) => {
	return (
		<div>
			<input
				{...rest}
				name={name}
				placeholder={placeholder}
				className="form-input"
				required
			/>
			{error && <div className="alert alert-danger">{error}</div>}
		</div>
	);
};

export default Input;
