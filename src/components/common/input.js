import React from "react";

const Input = ({ name, placeholder, error, ...rest }) => {
	return (
		<div className="Form__group">
			<input
				{...rest}
				name={name}
				placeholder={placeholder}
				className="Form__Input"
				required
			/>
			<label for={name} className="Form__label">
				{placeholder}
			</label>
			{/* {error && <div className="alert alert-danger">{error}</div>} */}
		</div>
	);
};

export default Input;
