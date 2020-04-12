import React, { Component } from "react";
import vote_img from "./img/vote-hand.png";

class Navbar extends Component {
	render() {
		return (
			<nav
				className="navbar navbar-expand-lg navbar-light"
				style={{ backgroundColor: "#e3f2fd" }}
			>
				<a className="navbar-brand">
					<img src={vote_img} alt="logo" width="25px" height="25px" />
					Politico
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<div className="navbar-nav ml-auto">
						{window.location.pathname === "/parties" && (
							<React.Fragment>
								<a className="nav-item nav-link" href="/parties">
									<i className="fa fa-list-alt" aria-hidden="true"></i> Parties
								</a>
								<a className="nav-item nav-link" href="/">
									<i className="fa fa-sign-out" aria-hidden="true"></i> SignOut
								</a>
							</React.Fragment>
						)}
						{window.location.pathname !== "/parties" && (
							<React.Fragment>
								<a className="nav-item nav-link" href="/signIn">
									<i className="fa fa-sign-in" aria-hidden="true"></i> SignIn
								</a>
								<a className="nav-item nav-link" href="/signUp">
									<i className="fa fa-user-plus" aria-hidden="true"></i> SignUp
								</a>
							</React.Fragment>
						)}
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
