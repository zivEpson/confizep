import React from "react";
import Select from "react-select";

/**
 * @file redux-form select box
 * @module RFReactSelect
 * @exports RFReactSelect
 * @link https://gist.github.com/leocristofani/98312e61807db8f32e720c9f97a186e5
 */

RFReactSelect.defaultProps = {
  multi: false,
  className: ""
};
const colourStyles = {
  singleValue: (styles, { data, isDisabled, isFocused, isSelected }) => ({
    ...styles,
    color: isDisabled ? "#495057" : "#6c757d",
    fontSize: "1rem"
  }),
  control: (styles, { data, isDisabled, isFocused, isSelected }) => ({
    ...styles,
    backgroundColor: isDisabled ? "#e9ecef" : "#FFF",
    color: isDisabled ? "#FFF!important" : "#FFF",
    border: "1px solid #ced4da",
    "&:hover": {
      borderColor: null
    },
    boxShadow: "none"
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled ? "#e9ecef" : "#fff",
      color: "#495057",
      cursor: isDisabled ? "not-allowed" : "default",
      "&:hover": {
        backgroundColor: "#E3DBDB"
      }
    };
  }
};

export default function RFReactSelect({
  input,
  options,
  multi,
  className,
  isDisabled
}) {
  const { name, value, onBlur, onChange, onFocus } = input;
  const transformedValue = transformValue(value, options, multi);
  return (
    <Select
      valueKey="value"
      name={name}
      isDisabled={isDisabled}
      value={transformedValue}
      multi={multi}
      options={options}
      onChange={
        multi ? multiChangeHandler(onChange) : singleChangeHandler(onChange)
      }
      onBlur={() => onBlur(value)}
      onFocus={onFocus}
      styles={colourStyles}
      placeholder={"Selectcds"}
    />
  );
}

/**
 * onChange from Redux Form Field has to be called explicity.
 */
function singleChangeHandler(func) {
  return function handleSingleChange(value) {
    func(value ? value.value : "");
  };
}

/**
 * onBlur from Redux Form Field has to be called explicity.
 */
function multiChangeHandler(func) {
  return function handleMultiHandler(values) {
    func(values.map(value => value.value));
  };
}

/**
 * For single select, Redux Form keeps the value as a string, while React Select
 * wants the value in the form { value: "grape", label: "Grape" }
 *
 * For multi select, Redux Form keeps the value as array of strings, while React Select
 * wants the array of values in the form [{ value: "grape", label: "Grape" }]
 */
function transformValue(value, options, multi) {
  if (multi && typeof value === "string") return [];

  const filteredOptions = options.filter(option => {
    return multi ? value.indexOf(option.value) !== -1 : option.value === value;
  });

  return multi ? filteredOptions : filteredOptions[0];
}
