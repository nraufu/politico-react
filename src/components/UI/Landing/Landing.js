import React from "react";
import { Link } from "react-router-dom";
import voters from "../../../assets/images/voters.png";
import "./Landing.css";

const Landing = () => {
	return (
		<div className="Landing">
			<div className="row">
				<div className="col-1-of-2">
					<h1 className="Landing__header"> Easy Vote for everyone </h1>
					<p className="Landing__paragraph">
						Politico enables citizens to give their mandate to politicians
						running for different government offices while building trust in the
						process through transparency.
					</p>
					<Link to="/signup" className="btn btn--yellow">
						SignUp & Vote
					</Link>
				</div>
				<div className="col-1-of-2">
					<figure>
						<img src={voters} alt="voting" className="Landing__image" />
					</figure>
				</div>
			</div>
		</div>
	);
};
export default Landing;
