import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/vote-hand.png";
import Aux from "../../HOC/Auxiliary/Auxiliary";
import "./Navbar.css";

class Navbar extends Component {
	render() {
		return (
			<nav className="navBar">
				<Link className="navBar__logo" to="/">
					<img src={logo} alt="logo" width="25px" height="25px" />
					Politico
				</Link>
				<ul className="navBar__list">
					{window.location.pathname === "/parties" && (
						<Aux>
							<li className="navBar__item">
								<Link className="navBar__link" to="/parties">
									<i className="fa fa-list-alt" aria-hidden="true"></i> Parties
								</Link>
							</li>
							<li className="navBar__item">
								<Link className="navBar__link" to="/offices">
									<i className="fa fa-list" aria-hidden="true"></i> Offices
								</Link>
							</li>
							<li className="navBar__item">
								<Link className="navBar__link" to="/">
									<i className="fa fa-sign-out" aria-hidden="true"></i> SignOut
								</Link>
							</li>
						</Aux>
					)}
					{window.location.pathname !== "/parties" && (
						<Aux>
							<li className="navBar__item">
								<Link className="navBar__link" to="/signIn">
									<i className="fa fa-sign-in" aria-hidden="true"></i> SignIn
								</Link>
							</li>
							<li className="navBar__item">
								<Link className="navBar__link" to="/signUp">
									<i className="fa fa-user-plus" aria-hidden="true"></i> SignUp
								</Link>
							</li>
						</Aux>
					)}
				</ul>
			</nav>
		);
	}
}

export default Navbar;
