//@flow
import React from "react";

import RFReactSelect from "./RFReactSelect";

/**
 * @file helper method to return form field according to setup (text, textarea, select) this field is initalized by redux-form 'Field' component
 * @module FormFieldByType
 * @exports FormFieldByType
 */

type Props = {
  input: any,
  label: string,
  placeHolder: string,
  type: string,
  disabled: any,
  selectOptions: any,
  meta: Object
};

export const FormFieldByType = (props: Props) => {
  const {
    input,
    label,
    placeHolder,
    type,
    disabled,
    selectOptions,
    meta: { error, touched }
  } = props;
  const renderQuestionType = () => {
    if (type === "text") {
      return (
        <input
          {...input}
          disabled={disabled}
          className={"form-control"}
          placeholder={placeHolder}
        />
      );
    } else if (type === "textarea") {
      return (
        <textarea
          {...input}
          disabled={disabled}
          className="form-control"
          placeholder={placeHolder}
        />
      );
    } else if (type === "select") {
      return (
        <RFReactSelect
          input={input}
          options={selectOptions}
          isDisabled={disabled}
        />
      );
    }
  };

  return (
    <div className="form-group">
      <label>{label}</label>
      {renderQuestionType()}
      <div className="text-danger ml-1">
        <small>{touched && error}</small>
      </div>
    </div>
  );
};

export default FormFieldByType;
