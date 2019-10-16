// @flow
import React from "react";
import { connect } from "react-redux";

import DeleteModal from "./DeleteModal";
import DBUpdateModal from "./DBUpdateModal";

/**
 * @file modal factory
 * @module ModalRoot
 */

//modal types
const MODAL_COMPONENTS = {
  DELETE_MODAL: DeleteModal,
  DB_UPDATE_MODAL: DBUpdateModal
};

type Props = {
  //modalRecuder -state.modal
  modal: Object
};

const ModalRoot = (props: Props) => {
  //ModalRoot reads the current modalType and modalProps from state.modal
  const { modalType, modalProps } = props.modal;
  if (!modalType) {
    return null;
  }

  //specific modal is created according to the modal type
  const SpecificModal = MODAL_COMPONENTS[modalType];
  return <SpecificModal {...modalProps} />;
};

function mapStateToProps(state) {
  const { modal } = state;
  return {
    modal: modal
  };
}
export default connect(
  mapStateToProps,
  null
)(ModalRoot);
