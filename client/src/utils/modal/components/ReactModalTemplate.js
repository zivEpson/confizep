//@flow
import React from "react";
import Modal from "react-modal";

import { customStyles } from "../constants/modalConstants";

/**
 * @file template modal for all app modals, based on "react-modal"
 * @module ReactModalTemplate
 */

//"react-modal" setup requirment
Modal.setAppElement("#root");

type Props = {
  //idicate whether the modal will have two buttons, negative and positive (cancel and return)
  isTwoButtons: boolean,
  //modal header -state.modal
  modalHeader: string,
  //modal body
  modalBody: string,
  //name for the positive button
  positiveName: string,
  //name for the negative button
  negativeName: string | null,
  //function for the positive button
  positiveFunc: Function,
  //function for the negative button
  negativeFunc: Function
};

const ReactModalTemplate = (props: Props) => {
  const {
    modalHeader,
    modalBody,
    positiveName,
    positiveFunc,
    negativeName,
    negativeFunc,
    isTwoButtons
  } = props;

  //add negative button when isTwoButtons id true
  const displayTwoButtons = () => {
    if (isTwoButtons) {
      return (
        <button className="btn btn-light" onClick={() => negativeFunc()}>
          {negativeName}
        </button>
      );
    } else {
      return null;
    }
  };

  return (
    <Modal style={customStyles} isOpen={true} contentLabel="Example Modal">
      <div>
        <div className="modal-header justify-content-center">
          <h5 className="modal-title text-capitalize">{modalHeader}</h5>
        </div>
        <div className="modal-body">
          <p>{modalBody}</p>
        </div>
        <div className="modal-footer justify-content-center">
          <button className="btn btn-light" onClick={() => positiveFunc()}>
            {positiveName}
          </button>
          {displayTwoButtons()}
        </div>
      </div>
    </Modal>
  );
};

export default ReactModalTemplate;
