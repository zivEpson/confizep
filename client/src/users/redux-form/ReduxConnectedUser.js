import React from "react";
import { reduxForm } from "redux-form";

import UserForm from "../components/UserForm";
import FilterUsersForm from "../components/FilterUsersForm";

const createUserForm = props => <UserForm {...props} />;
const filterUserForm = props => <FilterUsersForm {...props} />;

export const ConnectedCreateUserForm = reduxForm({
  form: "createUserForm",
  destroyOnUnmount: false
})(createUserForm);

export const ConnectedFilterUserForm = reduxForm({
  form: "filterUserForm"
})(filterUserForm);
