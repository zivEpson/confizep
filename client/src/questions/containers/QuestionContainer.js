// @flow
import React, { Component } from "react";
import { connect } from "react-redux";

import { ConnectedCreateQuestionForm as QuestionForm } from "../redux-form/ReduxConnectedQuestion";
import { submitQuestion, getQuestion } from "../questionAction";
import { getModelMode } from "../../utils/FormUtils/FormUtils";
import LoadingSpinner from "../../utils/LoadinSpinner/LoadingSpinner";
import { isEmpty } from "../../utils/utils";
import QuestionFromReview from "../components/QuestionFormReview";

/**
 * @file Entry point for Create/Update/View Question. There are two scanarios this module will be called. First scanario is question id as param(on the route).On this scanario the Question intilaValues(redux) will be initilized from DB(Update/ View). When question id is missiing as param, the flow is for create new question intilaValues will be empty. dsa
 * @module QuestionContainer
 */

type Props = {
  //<Router/> - The match object contains information about how a <Route path> matched the URL.
  match: Object,
  //questionAction - Get question from DB according to question id.
  getQuestion: Function,
  //ReduxForm - Values provided to the initialValues prop will be loaded into the form state and treated thereafter as "pristine".
  initialValues: Object,
  //values passed to the rewiew mechanism
  formValues: Object,
  //<Router/> -The location object represents where the app is now, where you want it to go, or even where it was.
  location: Object,
  //<Router/> - The history object allows you to manage and handle the browser history inside your views or components.
  history: Object,
  //questionAction - Submit question to the DB
  submitQuestion: Function,
  //Reducer - indicates if DB operation is going
  isFetching: Boolean
};

type State = {
  //Indicate if to show the quetion review screen or the create screen
  showFormReview: boolean
};

class QuestionContainer extends Component<Props, State> {
  state = {
    showFormReview: false
  };

  //When Module is first loaded. question id param is searched, if exists then question is fetched from the DB by the id.
  componentDidMount() {
    const { params } = this.props.match;
    if (!isEmpty(params)) {
      this.props.getQuestion(params.id);
    } else {
      this.props.getQuestion(null);
    }
  }

  renderContent() {
    const {
      initialValues,
      formValues,
      location,
      history,
      submitQuestion
    } = this.props;

    //get the mode of the current flow from query string
    const mode = getModelMode(location.search);

    if (!this.state.showFormReview) {
      return (
        // create screen
        <QuestionForm
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
        <QuestionFromReview
          formValues={formValues}
          initialValues={initialValues}
          submitMethod={submitQuestion}
          // on return user will return for the last route from history
          onReturn={history.goBack}
          // on cancel user will return to create screen
          onCancel={history.goBack}
          mode={mode}
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
  const { questions, form } = state;
  return {
    initialValues: questions.items,
    isFetching: questions.isFetching,
    // validate that while createQuestionForm is "undifiened", values on review screen will be empty object.
    formValues:
      typeof form.createQuestionForm === "undefined"
        ? {}
        : form.createQuestionForm.values
  };
}

//connect to redux store
export default connect(
  mapStateToProps,
  { submitQuestion, getQuestion }
)(QuestionContainer);
