import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import vote_img from "./img/vote-hand.png";

class Navbar extends Component {
	render() {
		return (
			<header className="container">
				<div className="logo">
					<Link to="/">
						<h1 id="p-logo">
							<img src={vote_img} alt="logo" width="25px" height="25px" />
							Politico
						</h1>
					</Link>
				</div>
				<nav className="nav">
					<a href="./#" className="nav-open-menu js-open-menu">
						{""}
					</a>
					<ul className="list nav-list js-nav-list">
						<li className="list-item">
							<a href="./#" className="nav-close-menu js-close-menu">
								{""}
							</a>
						</li>
						{window.location.pathname !== "/signIn" && (
							<li className="list-item">
								<a href="/signIn" className="link nav-link">
									SignIn
								</a>
							</li>
						)}
						{window.location.pathname === "/signIn" && (
							<li className="list-item">
								<a href="/signUp" className="link nav-link">
									SignUp
								</a>
							</li>
						)}
					</ul>
				</nav>
			</header>
		);
	}
}

export default Navbar;
