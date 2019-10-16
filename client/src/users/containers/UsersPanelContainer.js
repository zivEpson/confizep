// @flow
import React, { Component } from "react";
import { connect } from "react-redux";

import { ConnectedFilterUserForm as FilterUserForm } from "../redux-form/ReduxConnectedUser";
import UsersTableList from "../components/UsersTableList";
import { fetchUsers, deleteUser } from "../userAction";

/**
 * @file Entry point for displaying filter user panel and table.
 * @module UsersPanelContainer
 */

type Props = {
  //userAction - Fetch users from DB according to the given user params
  fetchUsers: Function,
  //userAction - Delete users according to user id
  deleteUser: Function,
  // returend data from the DB
  users: [Object]
};

class UsersPanelContainer extends Component<Props> {
  render() {
    const { fetchUsers, deleteUser, users } = this.props;
    return (
      <div>
        {/*search panel*/}
        <FilterUserForm onSubmit={fetchUsers} />
        <hr className="my-5" />
        {/*table panel*/}
        <UsersTableList users={users} deleteFunc={deleteUser} />
      </div>
    );
  }
}

//update values from reducer to props
function mapStateToProps(state) {
  return { users: Array.isArray(state.users) ? state.users : [] };
}

//connect to redux store
export default connect(
  mapStateToProps,
  { fetchUsers, deleteUser }
)(UsersPanelContainer);
