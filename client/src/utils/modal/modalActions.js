//@flow
/**
 * @file modal redux-actions library. Send data from the application to the redux store. The data is sent using dispatch (redux method).
 * @module modalActions
 * @export hideModal
 */

export const hideModal = () => async (dispatch: Function) => {
  dispatch({
    type: "HIDE_MODAL"
  });
};
