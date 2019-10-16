//@flow
import React from "react";
import { reduxForm } from "redux-form";

import QuestionForm from "../components/QuestionForm";
import FilterQuestionsForm from "../components/FilterQuestionsForm";
import { validate } from "./Validations";

/**
 * @file location for initilaizing redux-form components
 * @module ReduxConnectedQuestion.
 * @export ConnectedCreateQuestionForm
 * @export ConnectedFilterQuestionForm
 * @link https://redux-form.com/8.2.2/
 */

const CreateQuestionForm = props => <QuestionForm {...props} />;
const FilterQuestionForm = props => <FilterQuestionsForm {...props} />;

export const ConnectedCreateQuestionForm = reduxForm({
  form: "createQuestionForm",
  destroyOnUnmount: false,
  enableReinitialize: true,
  validate: validate
})(CreateQuestionForm);

export const ConnectedFilterQuestionForm = reduxForm({
  form: "filterQuestionForm",
  validate: validate
})(FilterQuestionForm);
