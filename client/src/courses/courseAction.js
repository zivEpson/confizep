// @flow
import axios from "axios";

import { isEmpty, difference } from "../utils/utils";
import {
  FETCH_COURSES,
  REQUEST_COURSE,
  GET_COURSE,
  CLEAR_COURSE
} from "../actions/types";

/**
 * @file course redux-actions library. Send data from the application to the redux  * store. The data is sent using dispatch (redux method).
 * @module courseAction
 */

/**
 * Submit course to the DB. Modal with DB status is provided.
 */
export const submitCourse = (
  values: Object,
  initialValues: Object,
  list: [Object],
  onReturn: Function
) => async (dispatch: Function) => {
  let res;

  values.questions = list;
  // on create course initailValues are null
  if (isEmpty(initialValues)) {
    res = await axios.post("/api/courses", values);
  } else {
    // on update question the delta is sent to be updated
    /**
     * @todo - change this to proper update
     */
    res = await axios.put(`/api/courses/${values._id}`, {
      name: values.name,
      description: values.description,
      _questions: values.questions,
      dateCreated: Date.now()
    });
  }

  // show modal
  dispatch({
    type: "SHOW_MODAL",
    modalType: "DB_UPDATE_MODAL",
    modalProps: {
      modelName: "courses",
      status: res.status,
      onReturn: onReturn
    }
  });
};

/**
 * Fetch courses from DB according to the given courses params
 */
export const fetchCourses = (values: Object) => async (dispatch: Function) => {
  const res = await axios.get("/api/courses", {
    params: {
      name: values["name"]
    }
  });
  dispatch({ type: FETCH_COURSES, payload: res.data });
};

//delete from DB by course id
const deleteFunc = async id => {
  await axios.delete(`/api/courses/${id}`);
};

/**
 * Delete course according to course id
 */
export const deleteCourse = (id: any, hideRowFunc: Function) => (
  dispatch: Function
) => {
  dispatch({
    type: "SHOW_MODAL",
    modalType: "DELETE_MODAL",
    modalProps: {
      modelId: id,
      deleteFunc: deleteFunc,
      hideRowFunc: hideRowFunc,
      modelName: "course"
    }
  });
};

/**
 * Get course from DB according to course id.
 */
export const getCourse = (id: Object) => async (dispatch: Function) => {
  if (id !== null) {
    dispatch({ type: REQUEST_COURSE });
    const res = await axios.get(`/api/courses/${id}`);
    dispatch({ type: GET_COURSE, payload: res.data });
  } else {
    dispatch({ type: CLEAR_COURSE });
  }
};
