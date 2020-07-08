import React from "react";
import Aux from "../../../HOC/Auxiliary/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";

const Modal = ({ show, clicked, children }) => {
	return (
		<Aux>
			<Backdrop show={show} clicked={clicked} />
			<div
				className="Modal"
				style={{
					transform: show ? "translateY(0)" : "translateY(-100vh)",
					opacity: show ? "1" : "0",
				}}
			>
				{children}
			</div>
		</Aux>
	);
};

export default Modal;
