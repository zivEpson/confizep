// @flow
import React from "react";
import { connect } from "react-redux";

import ReactModalTemplate from "./ReactModalTemplate";
import { hideModal } from "../modalActions";

/**
 * @file Generic delete modal.
 * @module DBUpdateModal
 */

type Props = {
  //modalAction - hide the modal after the process.
  hideModal: Function,
  //function to hide the row on the table of the deleted item
  hideRowFunc: Function,
  //model delete function to remove the value from db for example :deleteQuestion
  deleteFunc: Function,
  //the object id to delete
  modelId: Object
};

const DeleteModal = (props: Props) => {
  const { hideModal, modelId, deleteFunc, hideRowFunc } = props;
  const onDelete = () => {
    //delete from DB
    deleteFunc(modelId);
    //delete the row on the table
    hideRowFunc(modelId);
    //hide the modal
    hideModal();
  };

  return (
    <ReactModalTemplate
      modalHeader={`Delete question`}
      modalBody={`Are you sure you want to delete question? `}
      positiveName={"Yes"}
      positiveFunc={onDelete}
      negativeName={"No"}
      negativeFunc={hideModal}
      isTwoButtons={true}
    />
  );
};

export default connect(
  null,
  { hideModal }
)(DeleteModal);
