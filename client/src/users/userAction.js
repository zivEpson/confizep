// @flow
import axios from "axios";
import { difference } from "../utils/utils";

import {
  FETCH_USERS,
  GET_USER,
  REQUEST_USER,
  CLEAR_USERS,
  CLEAR_USER
} from "../actions/types";

/**
 * @file user redux-actions library. Send data from the application to the redux store. The data is sent using dispatch (redux method).
 * @module userAction
 */

/**
 * Fetch users from DB according to the given question params
 */
export const fetchUsers = (values: Object) => async (dispatch: Function) => {
  const res = await axios.get("/api/users", {
    params: {
      name: values["name"]
    }
  });
  dispatch({ type: FETCH_USERS, payload: res.data });
};

/**
 * clear users from the user reducer
 */
export const clearUsers = () => async (dispatch: Function) => {
  dispatch({ type: CLEAR_USERS });
};

/**
 * Get user from DB according to user id.
 */
export const getUser = (id: Object) => async (dispatch: Function) => {
  if (id !== null) {
    dispatch({ type: REQUEST_USER });
    const res = await axios.get(`/api/users/${id}`);
    dispatch({ type: GET_USER, payload: res.data });
  } else {
    dispatch({ type: CLEAR_USER });
  }
};

/**
 * Submit user to the DB. Modal with DB status is provided.
 */
export const submitUser = (values: Object, initialValues: Object) => async (
  dispatch: Function
) => {
  let res;
  if (initialValues === null) {
    res = await axios.post("/api/users", values);
    // on update user the delta is sent to be updated
  } else {
    res = await axios.put(
      `/api/users/${values._id}`,
      difference(values, initialValues)
    );
  }
};

/**
 * Delete user according to user id
 */
export const deleteUser = (id: Object) => async (dispatch: Function) => {
  dispatch({
    type: "SHOW_MODAL",
    modalType: "DELETE_MODAL",
    modalProps: {
      modelId: id
    }
  });
};
