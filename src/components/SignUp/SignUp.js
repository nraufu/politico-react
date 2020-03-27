import React, { Component } from "react";
import "./SignUp.css";

class SignUp extends Component {
  render() {
    return (
      <main className="container">
        <div className="main main-home">
            <div className="container">
                <div className="form-group">
                    <h2 className="log-title">
                        SignUp
                    </h2>
                    <form className="form-group-form js-form-login" action="./parties.html">
                        <input className="form-input" type="text" placeholder="Full Name" required />
                        <input className="form-input" type="text" placeholder="National ID" required />
                        <input className="form-input" type="email" placeholder="Email" required />
                        <input className="form-input" type="password" placeholder="Password" required />
                        <input className="form-input" type="password" placeholder="Confirm password" required />
                        <button type="submit" className="form-btn--submit js-login-button">Create Account</button>
                    </form>
                </div>
            </div>
        </div>
      </main>
    );
  }
}
export default SignUp;
