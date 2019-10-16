//@flow
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
  //questionAction - fetchCourses by search criteria
  onSubmit: Function
};

const FilterCoursesForm = (props: Props) => {
  const { handleSubmit, onSubmit } = props;
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
        <button className="btn btn-light" type="submit">
          Filter
        </button>
      </form>
    </div>
  );
};

export default FilterCoursesForm;
