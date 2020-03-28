import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import voters from "./img/voters.png";
import Footer from "../Footer/Footer";

class Landing extends Component {
	render() {
		return (
			<div>
				<main className="container">
					<section className="hero container">
						<h1>Easy Vote for everyone</h1>
						<p>
							{" "}
							Politico enables citizens to give their mandate to politicians
							running for different government offices while building trust in
							the process through transparency.
						</p>
						<Link to="/signup" className="form-btn--submit">
							SignUp & Vote
						</Link>
					</section>
					<div className="side-image">
						<figure>
							<img src={voters} alt="voting" />
						</figure>
					</div>
				</main>
				<Footer />
			</div>
		);
	}
}
export default Landing;
