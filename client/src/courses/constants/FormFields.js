// @flow

/**
 * @file contains setup for all course module form fields. type, name, label, etc'.
 * @module formFields
 */

export default [
  {
    key: 1,
    name: "name",
    label: "Course Name",
    type: "text",
    placeHolder: "Enter Course Name",
    displayOnFilter: true,
    displayOnQuestionBody: true,
    isArrayField: false,
    selectOptions: []
  },
  {
    key: 2,
    name: "description",
    label: "Description",
    type: "textarea",
    placeHolder: "Enter Course Description",
    displayOnFilter: false,
    displayOnQuestionBody: true,
    isArrayField: false,
    selectOptions: []
  }
];
