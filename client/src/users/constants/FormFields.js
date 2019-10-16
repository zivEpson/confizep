//@flow

/**
 * @file contains setup for all user module form fields. type, name, label, etc'.
 * @module formFields
 */

export default [
  {
    key: 1,
    name: "name",
    label: "Name",
    type: "text",
    placeHolder: "Enter user name",
    displayOnFilter: true,
    displayOnQuestionBody: true,
    isArrayField: false
  },
  {
    key: 2,
    name: "email",
    label: "Email",
    type: "text",
    placeHolder: "Enter Email",
    displayOnFilter: true,
    displayOnQuestionBody: true,
    isArrayField: false
  }
];
