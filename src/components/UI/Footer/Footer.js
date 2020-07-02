import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
	render() {
		return (
			<section className="Footer">
				Made with <i className="fa fa-heart"></i> by{" "}
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://github.com/nraufu"
				>
					NRauf{" "}
					<span role="img" aria-label="emoji">
						😊
					</span>
				</a>
			</section>
		);
	}
}
export default Footer;
