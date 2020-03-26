import React, { Component } from "react";
import "./Landing.css";
import voters from "./img/voters.png";

class Landing extends Component {
  render() {
    return (
      <main className="container">
        <section className="hero container">
          <h1>Easy Vote for everyone</h1>
          <p>
            {" "}
            Politico enables citizens to give their mandate to politicians
            running for different government offices while building trust in the
            process through transparency.
          </p>
          <a className="form-btn--submit" href="./#">
            SignUp & Vote
          </a>
        </section>
        <div className="side-image">
          <figure>
            <img src={voters} alt="voting" />
          </figure>
        </div>
      </main>
    );
  }
}
export default Landing;
