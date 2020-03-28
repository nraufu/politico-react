import React, { Component } from "react";

class PasswordRecover extends Component {
	render() {
		return (
			<main class="container">
				<div class="main main-home">
					<div class="form-group">
						<h2 class="log-title"> Recover Password </h2>
						<form class="form-group-form js-form-login" action="./signin.html">
							<input
								class="form-input"
								type="text"
								placeholder="Email"
								required
							/>
							<button type="submit" class="form-btn--submit js-login-button">
								Recover
							</button>
						</form>
					</div>
				</div>
			</main>
		);
	}
}

export default PasswordRecover;
