import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

import { fetchUserAuth } from "./auth/authAction";
import Routes from "./Routes";

class App extends Component {
  componentDidMount() {
    this.props.fetchUserAuth();
  }

  render() {
    return (
      <Router>
        <Routes location={this.props.location} />
      </Router>
    );
  }
}

export default connect(
  null,
  { fetchUserAuth }
)(App);
