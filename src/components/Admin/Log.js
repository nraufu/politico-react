import React, { Component } from "react";

class Log extends Component {
	render() {
		return (
			<main class="container">
				<div class="main main-home">
					<div class="form-group">
						<h2 class="log-title">Admin</h2>
						<form class="form-group-form js-form-login" action="./panel.html">
							<input class="form-input" type="text" placeholder="ID" required />
							<input
								class="form-input"
								type="password"
								placeholder="Password"
								required
							/>
							<button type="submit" class="form-btn--submit js-login-button">
								Enter
							</button>
						</form>
					</div>
				</div>
			</main>
		);
	}
}

export default Log;
