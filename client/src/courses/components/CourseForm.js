//@flow
import React, { useState, useEffect } from "react";

import FormFields from "../constants/FormFields";
import { renderFormFields } from "../../utils/FormUtils/RenderFormUtils";
import FormButtons from "../../utils/FormUtils/FormButtons";
import QuestionsPanelContainer from "../../questions/containers/QuestionsPanelContainer";
import CourseQuestionList from "./CourseQuestionList";
import { isEmpty } from "../../utils/utils";

/**
 * @file Display component for Create/Update/View Course.
 * @module CourseForm
 * @link https://blog.logrocket.com/a-guide-to-usestate-in-react-ecb9952e406c/
 */

type Props = {
  //redux-form - handles the form's submission.
  handleSubmit: Function,
  //
  onSubmit: Function,
  //Router - history.goBack
  onCancel: Function,
  //the current flow mode - create/update/view
  mode: String,
  array: Function,
  initialValues: Object,
  onReturnFromModal: Function
};

const CourseForm = (props: Props) => {
  const {
    handleSubmit,
    onSubmit,
    onCancel,
    mode,
    array,
    initialValues,
    onReturnFromModal
  } = props;

  //empty initial state
  const [record, setRecord] = useState({});
  const [list, setList] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    if (!isEmpty(initialValues)) {
      setList(initialValues._questions);
    }
    //[] make sure useEffect will only be called once loaded
    //be only componentDidMount and not componentDidUpdate
  }, []);

  const addNewQuestion = () => {
    //only new questions should be inserted to the course
    if(!isEmpty(record) && !list.includes(record)){
        const newArray = Array.from(list);
        newArray.push(record);
        setList(newArray);    
    }
  };
  const removeQuestion = () => {};

  return (
    <div className="my-4">
      <form
        onSubmit={handleSubmit(values => {
          onSubmit(values, initialValues, list, onCancel);
        })}
      >
        {renderFormFields(FormFields, null, mode)}
        <CourseQuestionList questionsList={list} setList={setList} />

        <FormButtons
          onCancel={onCancel}
          negativeName={"Cancel"}
          positiveName={"Submit"}
          singleButton = {mode === "view" ? true : false}
        />
      </form>
      {mode === "view" ? null :<div>
        <hr />
        <QuestionsPanelContainer
          handlerFunction={setRecord}
          isCalledFromCourse={true}
          courseAddQuestionFunc={addNewQuestion}
          courseRemoveQuestionFunc={removeQuestion}
        />
      </div>}
    </div>
  );
};

export default CourseForm;
