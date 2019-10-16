//@flow

/**
 * @file validation error method for question form
 * @module Validations.
 */
export const validate = (values: Object) => {
  const errors = {};
  if (!values.title) {
    errors.title = "Required";
  }
  if (!values.body) {
    errors.body = "Required";
  }
  if (!values.answer) {
    errors.answer = "Required";
  }
  return errors;
};
