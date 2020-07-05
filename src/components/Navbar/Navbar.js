import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/vote-hand.png";
import Aux from "../../HOC/Auxiliary/Auxiliary";
import "./Navbar.css";

const Navbar = ({ user }) => {
	return (
		<nav className="navBar">
			<NavLink className="navBar__logo" to={user ? "#" : "/"}>
				<img src={logo} alt="logo" width="25px" height="25px" />
				Politico
			</NavLink>
			<ul className="navBar__list">
				{user ? (
					<Aux>
						<li className="navBar__item">
							<NavLink className="navBar__link" to="/parties">
								<i className="fa fa-list-alt" aria-hidden="true"></i> Parties
							</NavLink>
						</li>
						<li className="navBar__item">
							<NavLink className="navBar__link" to="/offices">
								<i className="fa fa-list" aria-hidden="true"></i> Offices
							</NavLink>
						</li>
						<li className="navBar__item">
							<NavLink className="navBar__link" to="/politician">
								<i className="fa fa-user" aria-hidden="true"></i> Politician
							</NavLink>
						</li>
						<li className="navBar__item">
							<NavLink className="navBar__link" to="/logout">
								<i className="fa fa-sign-out" aria-hidden="true"></i> SignOut
							</NavLink>
						</li>
					</Aux>
				) : (
					<Aux>
						<li className="navBar__item">
							<NavLink className="navBar__link" to="/signIn">
								<i className="fa fa-sign-in" aria-hidden="true"></i> SignIn
							</NavLink>
						</li>
						<li className="navBar__item">
							<NavLink className="navBar__link" to="/signUp">
								<i className="fa fa-user-plus" aria-hidden="true"></i> SignUp
							</NavLink>
						</li>
					</Aux>
				)}
			</ul>
		</nav>
	);
};

export default Navbar;
