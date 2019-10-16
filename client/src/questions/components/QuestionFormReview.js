// @flow
import React from "react";

import ModalRoot from "../../utils/modal/components/ModalRoot";
import QuestionBody from "./QuestionDisplay";
import FormReviewButtons from "../../utils/FormUtils/FormReviewButtons";

/**
 * @file after creating/viewing/updating the question, the component allow the question creator to view the question as the user will view it.
 * @module QuestionFormReview
 */

type Props = {
  //questionAction - submit Question to db.
  submitMethod: Function,
  //new question form information
  formValues: Object,
  //initial question values loaded from db or empty on create mode
  initialValues: Object,
  // on cancel user will return to create screen
  onCancel: Function,
  // on return user will return for the last route from history
  onReturn: Function,
  // the current flow mode (crate/update/view)
  mode: string
};
export const QuestionFormReview = (props: Props) => {
  const {
    submitMethod,
    formValues,
    initialValues,
    onReturn,
    onCancel,
    mode
  } = props;

  return (
    <div>
      <QuestionBody formValues={formValues} />
      <FormReviewButtons
        onAction={submitMethod}
        onCancel={onCancel}
        formValues={formValues}
        initialValues={initialValues}
        mode={mode}
        onReturn={onReturn}
      />
      <ModalRoot />
    </div>
  );
};

export default QuestionFormReview;
