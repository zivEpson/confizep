//@flow
import React from "react";


/**
 * @file generic buttons for review screen
 * @module FormReviewButtons
 */

type Props = {
  onAction: Function,
  onCancel: Function,
  formValues: Object,
  initialValues: Object,
  mode: string,
  onReturn: Function
};

function FormReviewButtons(props: Props) {
  const {
    onAction,
    onCancel,
    formValues,
    initialValues,
    mode,
    onReturn
  } = props;

  const renderButton = () => {
    switch (mode) {
      case "add":
        return (
          <button
            onClick={() => onAction(formValues, initialValues, onReturn)}
            className="btn btn-outline-success"
          >
            Submit
          </button>
        );
      case "update":
        return (
          <button
            onClick={() => onAction(formValues, initialValues, onReturn)}
            className="btn btn-outline-success"
          >
            Update
          </button>
        );
      case "delete":
        return (
          <button
            onClick={() => onAction()}
            className="btn btn-outline-success"
          >
            Delete
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <div className="text-center mt-3">
      <button onClick={onCancel} className="btn btn-outline-warning mr-2">
        {mode === "view" ? "Return" : "Cancel"}
      </button>
      {renderButton()}
    </div>
  );
}

export default FormReviewButtons;
