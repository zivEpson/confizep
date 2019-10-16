import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";

import authReducer from "./auth/authReducer";
import questionsReducer from "./questions/questionReducer";
import userReducer from "./users/userReducer";
import modalReducer from "./utils/modal/modalReducer";
import courseReducer from "./courses/courseReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  questions: questionsReducer,
  users: userReducer,
  modal: modalReducer,
  courses: courseReducer
});
