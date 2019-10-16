//@flow
/**
 * @file modal redux-reducer library. specify how the application's state changes in response to actions sent to the store.
 * @module modalReducer
 */

const initialState = {
  modalType: null,
  modalProps: {}
};

export default function(state: Object = initialState, action: Object) {
  switch (action.type) {
    case "SHOW_MODAL":
      return {
        modalType: action.modalType,
        modalProps: action.modalProps
      };
    case "HIDE_MODAL":
      return initialState;
    default:
      return state;
  }
}
