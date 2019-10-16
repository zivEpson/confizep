// @flow
import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";

import { columns, selectRow } from "../constants/UserTableConstants";
import TableButtons from "../../utils/TableUtils/TableButtons";

/**
 * @file component which desiplay the user table
 * @module UsersTableList
 */

type Props = {
  //userAction - delete question by id
  deleteFunc: Function,
  //users fetched from db.
  users: Object
};

const UsersTableList = (props: Props) => {
  const { users, deleteFunc } = props;
  // hooks - let you use state without writing a class.
  const [recordId, setRecordId] = useState(null);
  const onSelect = (row: Object) => {
    setRecordId(row._id);
  };
  selectRow.onSelect = onSelect;

  return (
    <div>
      <TableButtons
        moduleName={"user"}
        recordId={recordId}
        deleteFunc={deleteFunc}
      />
      <BootstrapTable
        keyField="_id"
        data={users}
        columns={columns}
        selectRow={selectRow}
      />
    </div>
  );
};

export default UsersTableList;
