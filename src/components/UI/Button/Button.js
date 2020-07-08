import React from "react";

const Button = ({ label, color, clicked }) => {
	return (
		<button className={`btn btn--${color}`} onClick={clicked}>
			{label}
		</button>
	);
};

export default Button;
