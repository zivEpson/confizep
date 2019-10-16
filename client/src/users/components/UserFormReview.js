// @flow
import React from "react";

import FormReviewButtons from "../../utils/FormUtils/FormReviewButtons";

/**
 * @file after creating/viewing/updating the question, the component allow the user creator to view the user as the user will view it.
 * @module UserFormReview
 */

type Props = {
  //userAction - submit user to db.
  submitMethod: Function,
  //new question form information
  formValues: Object,
  //initial user values loaded from db or empty on create mode
  initialValues: Object,
  // on cancel user will return to create screen
  onCancel: Function,
  // on return user will return for the last route from history
  onReturn: Function,
  // the current flow mode (crate/update/view)
  mode: string
};

const UserFormReview = (props: Props) => {
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
      <h6>User Fields will be displayed</h6>
      <FormReviewButtons
        onAction={submitMethod}
        onCancel={onCancel}
        formValues={formValues}
        initialValues={initialValues}
        mode={mode}
        onReturn={onReturn}
      />
    </div>
  );
};

export default UserFormReview;
