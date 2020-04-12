import React, { Component } from "react";

class Footer extends Component {
	render() {
		return (
			<footer className="footer py-3 fixed-bottom">
				<div className="col-2 mx-auto">
					<span>
						Made with <i className="fa fa-heart"></i> by{" "}
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/nraufu"
							className="text-black-50 text-decoration-none"
						>
							Raufu
						</a>
					</span>
				</div>
			</footer>
		);
	}
}
export default Footer;
