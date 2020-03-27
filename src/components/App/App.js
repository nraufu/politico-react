import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import Landing from "../Landing/Landing";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import Footer from "../Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
