//@flow
import axios from "axios";

import { isEmpty, difference } from "../utils/utils";
import {
  FETCH_QUESTIONS,
  REQUEST_QUESTION,
  GET_QUESTION,
  CLEAR_QUESTION
} from "../actions/types";

/**
 * @file question redux-actions library. Send data from the application to the redux  * store. The data is sent using dispatch (redux method).
 * @module questionAction
 */

/**
 * Fetch questions from DB according to the given question params
 */
export const fetchQuestions = (values: Object) => async (
  dispatch: Function
) => {
  const res = await axios.get("/api/questions", {
    params: {
      title: values["title"],
      questionType: values["questionType"]
    }
  });
  dispatch({ type: FETCH_QUESTIONS, payload: res.data });
};

/**
 * Submit question to the DB. Modal with DB status is provided.
 */
export const submitQuestion = (
  values: Object,
  initialValues: Object,
  onReturn: Function
) => async (dispatch: Function) => {
  let res;
  // on create question initailValues are null
  if (isEmpty(initialValues)) {
    res = await axios.post("/api/questions", values);
  } else {
    // on update question the delta is sent to be updated
    res = await axios.put(
      `/api/questions/${values._id}`,
      difference(values, initialValues)
    );
  }

  dispatch({
    type: "SHOW_MODAL",
    modalType: "DB_UPDATE_MODAL",
    modalProps: {
      modelName: "question",
      status: res.status,
      onReturn: onReturn
    }
  });
};

//delete from DB by question id
const deleteFunc = async id => {
  await axios.delete(`/api/questions/${id}`);
};

/**
 * Delete question according to question id
 */
export const deleteQuestion = (id: any, hideRowFunc: Function) => (
  dispatch: Function
) => {
  dispatch({
    type: "SHOW_MODAL",
    modalType: "DELETE_MODAL",
    modalProps: {
      modelId: id,
      deleteFunc: deleteFunc,
      hideRowFunc: hideRowFunc,
      modelName: "question"
    }
  });
};

/**
 * Get question from DB according to question id.
 */
export const getQuestion = (id: Object) => async (dispatch: Function) => {
  if (id !== null) {
    dispatch({ type: REQUEST_QUESTION });
    const res = await axios.get(`/api/questions/${id}`);
    dispatch({ type: GET_QUESTION, payload: res.data });
  } else {
    dispatch({ type: CLEAR_QUESTION });
  }
};
