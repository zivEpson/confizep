// @flow
import React from "react";
import { connect } from "react-redux";

import ReactModalTemplate from "./ReactModalTemplate";
import { hideModal } from "../modalActions";

/**
 * @file Generic update modal.
 * @module DBUpdateModal
 */

type Props = {
  //modalAction - hide the modal after the process.
  hideModal: Function,
  //Indicate where to return after
  onReturn: Function,
  //model name - question/course/user
  modelName: string
};

const DBUpdateModal = (props: Props) => {
  const { hideModal, modelName, onReturn } = props;

  const onModalReturn = () => {
    onReturn();
    hideModal();
  };
  return (
    <ReactModalTemplate
      modalHeader={`Create ${modelName}`}
      modalBody={`${modelName} was created`}
      positiveName={"Return"}
      positiveFunc={onModalReturn}
      negativeName={null}
      negativeFunc={null}
      isTwoButtons={false}
    />
  );
};

export default connect(
  null,
  { hideModal }
)(DBUpdateModal);
