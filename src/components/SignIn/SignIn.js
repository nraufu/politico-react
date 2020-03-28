import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

class SignIn extends Component {
	render() {
		return (
			<main className="container">
				<div className="main main-home">
					<div className="form-group">
						<h2 className="log-title">SignIn</h2>
						<form
							className="form-group-form js-form-login"
							action="./parties.html"
						>
							<input
								className="form-input"
								type="text"
								placeholder="National ID"
								required
							/>
							<input
								className="form-input"
								type="password"
								placeholder="Password"
								required
							/>
							<button
								type="submit"
								className="form-btn--submit js-login-button"
							>
								Login
							</button>
							<p className="alternate">
								Forgot Password?
								<Link className="form-btn--alternate" to="/recoverPassword">
									Recover Password
								</Link>
							</p>
						</form>
					</div>
				</div>
			</main>
		);
	}
}
export default SignIn;
