// @flow
import React, { Component } from "react";
import { connect } from "react-redux";

import { ConnectedFilterQuestionForm as FilterQuestionForm } from "../redux-form/ReduxConnectedQuestion";
import QuestionsTableList from "../components/QuestionsTableList";
import { deleteQuestion, fetchQuestions } from "../questionAction";

/**
 * @file Entry point for displaying filter questions panel and table.
 * @module QuestionsPanelContainer
 */

type Props = {
  //questionAction - Fetch questions from DB according to the given question params
  fetchQuestions: Function,
  //questionAction - Delete question according to question id
  deleteQuestion: Function,
  // returend data from the DB
  questions: [Object],
  //indicate whether this component was called from create course
  isCalledFromCourse: boolean,
  //handlerFunction - used by course module to add a question
  handlerFunction: Function,
  //method to add new question to course
  courseAddQuestionFunc: Function,
  //method to remove questions from course
  courseRemoveQuestionFunc: Function
};

class QuestionsPanelContainer extends Component<Props> {
  render() {
    const {
      fetchQuestions,
      deleteQuestion,
      questions,
      isCalledFromCourse,
      handlerFunction,
      courseAddQuestionFunc,
      courseRemoveQuestionFunc
    } = this.props;
    return (
      <div>
        {/*search panel*/}
        <FilterQuestionForm
          onSubmit={fetchQuestions}
          isCalledFromCourse={isCalledFromCourse}
          courseAddQuestionFunc={courseAddQuestionFunc}
          courseRemoveQuestionFunc={courseRemoveQuestionFunc}
        />
        <hr className="my-5" />
        {/*table panel*/}
        <QuestionsTableList
          questions={questions}
          deleteFunc={deleteQuestion}
          handlerFunction={handlerFunction}
        />
      </div>
    );
  }
}

/**
 * Add question and question list share the same reducer,
 * when returned from add question, the reducer state is {}
 * question list expect [].
 */
function setQuestionsList(questions) {
  if (Array.isArray(questions)) {
    return questions;
  } else {
    return [];
  }
}

//update values from reducer to props
function mapStateToProps(state) {
  return { questions: setQuestionsList(state.questions.items) };
}

//connect to redux store
export default connect(
  mapStateToProps,
  { deleteQuestion, fetchQuestions }
)(QuestionsPanelContainer);
