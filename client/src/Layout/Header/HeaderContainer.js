import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "./Header";

class HeaderContainer extends Component {
  render() {
    return <Header auth={this.props.auth} />;
  }
}

// set the auth state on the props.
function mapStateToProps({ auth }) {
  return { auth };
}

// update the state with the new auth
export default connect(mapStateToProps)(HeaderContainer);
