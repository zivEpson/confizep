// @flow
import React, { Component } from "react";
import { connect } from "react-redux";

import { getUser, submitUser } from "../userAction";
import { isEmpty } from "../../utils/utils";
import { getModelMode } from "../../utils/FormUtils/FormUtils";
import LoadingSpinner from "../../utils/LoadinSpinner/LoadingSpinner";
import { ConnectedCreateUserForm as UserForm } from "../redux-form/ReduxConnectedUser";
import UserFormReview from "../components/UserFormReview";

/**
 * @file Entry point for Create/Update/View User. There are two scanarios this module will be called. First scanario is user id as param(on the route).On this scanario the User intilaValues(redux) will be initilized from DB(Update/ View). When User id is missiing as param, the flow is for create new User intilaValues will be empty.
 * @module UserContainer
 */

type Props = {
  //ReduxForm - Values provided to the initialValues prop will be loaded into the form state and treated thereafter as "pristine".
  initialValues: Object,
  //values passed to the rewiew mechanism
  formValues: Object,
  //<Router/> -The location object represents where the app is now, where you want it to go, or even where it was.
  location: Object,
  //<Router/> - The history object allows you to manage and handle the browser history inside your views or components.
  history: Object,
  //userAction - Submit user to the DB
  submitUser: Function,
  //userAction - get user from the DB
  getUser: Function,
  //<Router/> - The match object contains information about how a <Route path> matched the URL.
  match: Object,
  //Reducer - indicates if DB operation is going
  isFetching: Boolean
};

type State = {
  //Indicate if to show the quetion review screen or the create screen
  showFormReview: boolean
};

class UserContainer extends Component<Props, State> {
  state = {
    showFormReview: false
  };

  //When Module is first loaded. user id param is searched, if exists then user is fetched from the DB by the id.
  componentDidMount() {
    const { params } = this.props.match;
    if (!isEmpty(params)) {
      this.props.getUser(params.id);
    } else {
      this.props.getUser(null);
    }
  }

  renderContent() {
    const {
      initialValues,
      formValues,
      location,
      history,
      submitUser
    } = this.props;

    //get the mode of the current flow from query string
    const mode = getModelMode(location.search);

    if (!this.state.showFormReview) {
      return (
        // create screen
        <UserForm
          initialValues={initialValues}
          mode={mode}
          onCancel={history.goBack}
          onSubmit={() => {
            this.setState({ showFormReview: true });
          }}
        />
      );
    } else {
      return (
        //review screen
        <UserFormReview
          onCancel={() => {
            this.setState({ showFormReview: false });
          }}
          submitMethod={submitUser}
          formValues={formValues}
          initialValues={initialValues}
          mode={mode}
          onReturn={history.goBack}
        />
      );
    }
  }

  render() {
    return (
      <div>
        {/*While fetching from the DB, display spinner*/}
        {this.props.isFetching ? <LoadingSpinner /> : this.renderContent()}
      </div>
    );
  }
}

//update values from reducer to props
function mapStateToProps(state) {
  const { users, form } = state;
  return {
    initialValues: users.items,
    isFetching: users.isFetching,
    // before values are filled on the form
    formValues:
      typeof form.createUserForm === "undefined"
        ? {}
        : form.createUserForm.values
  };
}

//connect to redux store
export default connect(
  mapStateToProps,
  { getUser, submitUser }
)(UserContainer);
