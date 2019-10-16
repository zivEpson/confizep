// @flow
import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";

import { columns, selectRow } from "../constants/CourseTableConstants";
import TableButtons from "../../utils/TableUtils/TableButtons";

/**
 * @file component which desiplay the course table
 * @module CoursesTableList
 */

type Props = {
  //courseAction - delete question by id
  deleteFunc: Function,
  //courses fetched from db.
  courses: [Object]
};

const CoursesTableList = (props: Props) => {
  const { courses, deleteFunc } = props;
  // hooks - let you use state without writing a class.
  const [recordId, setRecordId] = useState(null);
  const [deletedRecordId, hideRow] = useState(null);

  const onSelect = (row: Object) => {
    setRecordId(row._id);
  };
  selectRow.onSelect = onSelect;

  return (
    <div>
      <TableButtons
        moduleName={"course"}
        recordId={recordId}
        deleteFunc={deleteFunc}
        hideRow={hideRow}
      />
      <BootstrapTable
        keyField="_id"
        data={courses}
        columns={columns}
        selectRow={selectRow}
        hiddenRows={[deletedRecordId]}
      />
    </div>
  );
};

export default CoursesTableList;
