//@flow
import { dateFormatter } from "../../utils/TableUtils/DataFormater";

/**
 * @file contains setup for question table columns.
 * @module QuestionTableConstants
 * @export columns
 * @export selectRow
 * @link https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/row-select-props.html#selectrowselected-array
 */

export const columns = [
  {
    dataField: "title",
    text: "Title"
  },
  {
    dataField: "questionType",
    text: "Type"
  },
  {
    dataField: "dateCreated",
    text: "Created At",
    formatter: dateFormatter
  }
];

export const selectRow = {
  mode: "radio",
  clickToSelect: true,
  hideSelectColumn: true,
  bgColor: "#ffb4d9",
  onSelect: () => {}
};
