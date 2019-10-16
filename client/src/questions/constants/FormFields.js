//@flow
import { questionsTypes } from "./QuestionTypes";
import RenderCodeBlock from "../components/RenderCodeBlock";
import RenderHints from "../components/RenderHints";

/**
 * @file contains setup for all question module form fields. type, name, label, etc'.
 * @module formFields
 * @export FieldArrayMap
 */

export const FieldArrayMap = { bodyCode: RenderCodeBlock, hints: RenderHints };

export default [
  {
    key: 1,
    name: "title",
    label: "Title",
    type: "text",
    placeHolder: "Enter Question Title",
    displayOnFilter: true,
    displayOnQuestionBody: true,
    isArrayField: false,
    selectOptions: []
  },
  {
    key: 2,
    name: "questionType",
    label: "Question Type",
    type: "select",
    placeHolder: "Question Type",
    displayOnFilter: true,
    displayOnQuestionBody: false,
    isArrayField: false,
    selectOptions: questionsTypes
  },
  {
    key: 3,
    name: "body",
    label: "Body of the Question",
    type: "textarea",
    placeHolder: "Enter Question Body",
    displayOnFilter: false,
    displayOnQuestionBody: true,
    isArrayField: false,
    selectOptions: []
  },
  {
    key: 4,
    name: "hints",
    label: "Add Hints:",
    type: "text",
    placeHolder: "Enter Hint",
    displayOnFilter: false,
    displayOnQuestionBody: true,
    isArrayField: true,
    selectOptions: []
  },
  {
    key: 5,
    name: "bodyCode",
    label: "Add Code:",
    type: "textarea",
    placeHolder: "Enter Code",
    displayOnFilter: false,
    displayOnQuestionBody: true,
    isArrayField: true,
    selectOptions: []
  },
  {
    key: 6,
    name: "answer",
    label: "Answer",
    type: "textarea",
    placeHolder: "Enter Question Answer",
    displayOnQuestionBody: true,
    isArrayField: false,
    selectOptions: []
  }
];
