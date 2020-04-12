import React, { Component } from "react";
import { Link } from "react-router-dom";
import voters from "./img/voters.png";

class Landing extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-6 hero">
					<h1> Easy Vote for everyone </h1>
					<p>
						Politico enables citizens to give their mandate to politicians
						running for different government offices while building trust in the
						process through transparency.
					</p>
					<Link to="/signup" className="btn btn-outline-dark">
						SignUp & Vote
					</Link>
				</div>
				<div className="col-6">
					<figure>
						<img src={voters} alt="voting" />
					</figure>
				</div>
			</div>
		);
	}
}
export default Landing;
