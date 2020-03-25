import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <h4>
          Made with <span>&#10084;</span> by <a className="link" href="https://github.com/nraufu"> Raufu
          </a>
        </h4>
      </footer>
    );
  }
}
export default Footer;
