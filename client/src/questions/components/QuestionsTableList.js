// @flow
import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";

import { columns, selectRow } from "../constants/QuestionTableConstants";
import TableButtons from "../../utils/TableUtils/TableButtons";

/**
 * @file component which desiplay the question table
 * @module QuestionsTableList
 */

type Props = {
  //questionAction - delete question by id
  deleteFunc: Function,
  //questions fetched from db.
  questions: [Object],
  //handlerFunction - used by course module choose a question
  handlerFunction: Function
};

const QuestionsTableList = (props: Props) => {
  const { questions, deleteFunc, handlerFunction } = props;
  // hooks - let you use state without writing a class.
  const [recordId, setRecordId] = useState(null);
  const [deletedRecordId, hideRow] = useState(null);

  const onSelect = (row: Object) => {
    setRecordId(row._id);
    if (typeof handlerFunction !== "undefined") {
      handlerFunction(row);
    }
  };
  selectRow.onSelect = onSelect;

  return (
    <div>
      <TableButtons
        moduleName={"question"}
        recordId={recordId}
        deleteFunc={deleteFunc}
        hideRow={hideRow}
      />
      <BootstrapTable
        keyField="_id"
        data={questions}
        columns={columns}
        selectRow={selectRow}
        hiddenRows={[deletedRecordId]}
      />
    </div>
  );
};

export default QuestionsTableList;
