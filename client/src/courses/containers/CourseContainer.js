//@flow
import React, { Component } from "react";
import { connect } from "react-redux";

import { submitCourse, getCourse } from "../courseAction";
import { ConnectedCreateCourseForm as CourseForm } from "../redux-form/ReduxConnectedCourse";
import { ConnectedCreateCourseQuestionList as CourseQuestionList } from "../redux-form/ReduxConnectedCourse";
import { getModelMode } from "../../utils/FormUtils/FormUtils";
import LoadingSpinner from "../../utils/LoadinSpinner/LoadingSpinner";
import { isEmpty } from "../../utils/utils";

/**
 * @file Entry point for Create/Update/View Course. There are two scanarios this module will be called. First scanario is course id as param(on the route).On this scanario the Course intilaValues(redux) will be initilized from DB(Update/ View). When Course id is missiing as param, the flow is for create new course intilaValues will be empty.
 * @module QuestionContainer
 */

type Props = {
  //courseAction - Submit question to the DB
  submitCourse: Function,
  //<Router/> - The match object contains information about how a <Route path> matched the URL.
  match: Object,
  //courseAction - Get course from DB according to course id.
  getCourse: Function,
  //ReduxForm - Values provided to the initialValues prop will be loaded into the form state and treated thereafter as "pristine".
  initialValues: Object,
  //values passed to the rewiew mechanism
  formValues: Object,
  //<Router/> -The location object represents where the app is now, where you want it to go, or even where it was.
  location: Object,
  //<Router/> - The history object allows you to manage and handle the browser history inside your views or components.
  history: Object,
  //Reducer - indicates if DB operation is going
  isFetching: Boolean
};

type State = {
  //Indicate if to show the quetion review screen or the create screen
  page: number
};

class CourseContainer extends Component<Props, State> {
  //When Module is first loaded. question id param is searched, if exists then question is fetched from the DB by the id.
  componentDidMount() {
    const { params } = this.props.match;
    if (!isEmpty(params)) {
      this.props.getCourse(params.id);
    } else {
      this.props.getCourse(null);
    }
  }

  renderContent() {
    const {
      initialValues,
      formValues,
      location,
      history,
      submitCourse
    } = this.props;

    //get the mode of the current flow from query string
    const mode = getModelMode(location.search);

    return (
      // create screen
      <div>
        <CourseForm
          initialValues={initialValues}
          mode={mode}
          onCancel={history.goBack}
          onSubmit={submitCourse}
        />
      </div>
    );
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
  const { courses } = state;
  return {
    initialValues: courses.items,
    isFetching: courses.isFetching
  };
}

//connect to redux store
export default connect(
  mapStateToProps,
  { submitCourse, getCourse }
)(CourseContainer);
