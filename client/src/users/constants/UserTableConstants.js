//@flow
import { dateFormatter } from "../../utils/TableUtils/DataFormater";

/**
 * @file contains setup for question table columns.
 * @module UserTableConstants
 * @export columns
 * @export selectRow
 */

export const columns = [
  {
    dataField: "name",
    text: "User Name"
  },
  {
    dataField: "email",
    text: "User Email"
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
