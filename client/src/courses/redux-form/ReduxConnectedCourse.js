//@flow
import React from "react";
import { reduxForm } from "redux-form";

import CourseForm from "../components/CourseForm";
import FilterCoursesForm from "../components/FilterCoursesForm";
import CourseQuestionList from "../components/CourseQuestionList";
/**
 * @file location for initilaizing redux-form components
 * @module ReduxConnectedCourse.
 * @export ConnectedCreateCourseForm
 * @export ConnectedFilterCourseForm
 * @export ConnectedCreateCourseQuestionList
 * @link https://redux-form.com/8.2.2/
 */

const CreateCourseForm = props => <CourseForm {...props} />;
const FilterCourseForm = props => <FilterCoursesForm {...props} />;
const CourseQuestionListForm = props => <CourseQuestionList {...props} />;

export const ConnectedCreateCourseForm = reduxForm({
  form: "createCourseForm",
  destroyOnUnmount: false,
  enableReinitialize: true
})(CreateCourseForm);

export const ConnectedCreateCourseQuestionList = reduxForm({
  form: "createCourseForm",
  destroyOnUnmount: false,
  enableReinitialize: true
})(CourseQuestionListForm);

export const ConnectedFilterCourseForm = reduxForm({
  form: "filterCourseForm"
})(FilterCourseForm);
