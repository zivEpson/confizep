// @flow
import _ from "lodash";
import React from "react";
import { Field } from "redux-form";

import FormFields from "../constants/FormFields";
import FormFieldByType from "../../utils/FormUtils/FormFieldByType";

/**
 * @file Display the question filter panel
 * @module FilterQuestionsForm
 */

type Props = {
  //redux-form - handles the form's submission.
  handleSubmit: Function,
  //questionAction - fetchQuestions by search criteria
  onSubmit: Function,
  //indicate whether this component was called from create course
  isCalledFromCourse: boolean,
  //method to add new question to course
  courseAddQuestionFunc: Function,
  //method to remove questions from course
  courseRemoveQuestionFunc: Function
};

export const FilterQuestionsForm = (props: Props) => {
  const {
    handleSubmit,
    onSubmit,
    isCalledFromCourse,
    courseAddQuestionFunc,
    courseRemoveQuestionFunc
  } = props;

  const renderCourseButtons = () => {
    return (
      <div>
        <button
          onClick={() => courseAddQuestionFunc()}
          className="btn btn-light"
          type="button"
        >
          Add
        </button>
        <button
          onClick={() => courseRemoveQuestionFunc()}
          className="btn btn-light"
          type="button"
        >
          Remove
        </button>
      </div>
    );
  };

  const renderFields = () => {
    return _.map(
      FormFields,
      ({ key, name, displayOnFilter, label, type, selectOptions }) => {
        if (displayOnFilter === true) {
          return (
            <div key={key} className="col-3 mt-4">
              <Field
                component={FormFieldByType}
                type={type}
                name={name}
                label={label}
                isFilterPanel={true}
                selectOptions={selectOptions}
              />
            </div>
          );
        }
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(value => onSubmit(value))}>
        <div className="form-row">{renderFields()}</div>
        <div className={"row"}>
          <button className="btn btn-light ml-3" type="submit">
            Filter
          </button>
          {isCalledFromCourse ? renderCourseButtons() : null}
        </div>
      </form>
    </div>
  );
};

export default FilterQuestionsForm;
