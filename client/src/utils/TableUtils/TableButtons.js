import React, { useState } from "react";
import { Redirect } from "react-router";

import { buildURL } from "../utils";
import ModalRoot from "../modal/components/ModalRoot";
import "./TableUtils.css";

const TableButtons = ({ moduleName, recordId, deleteFunc, hideRow }) => {
  const [actionType, setActionType] = useState(null);

  const buttonAction = () => {
    switch (actionType) {
      case "create":
        return <Redirect to={`/admin-dashboard/new-${moduleName}?mode=add`} />;
      case "update":
        if (recordId !== null) {
          return (
            <Redirect push to={buildURL(moduleName, recordId, "update")} />
          );
        }
        break;
      case "view":
        if (recordId !== null) {
          return <Redirect push to={buildURL(moduleName, recordId, "view")} />;
        }
        break;
      case "delete":
        if (recordId !== null) {
          return (
            <Redirect push to={buildURL(moduleName, recordId, "delete")} />
          );
        }
        break;
      default:
        return null;
    }
  };

  return (
    <div className="btn-group btn-group-sm">
      <button
        className="btn btn-link"
        type="button"
        onClick={() => setActionType("view")}
      >
        <i className="fas fa-eye" />
      </button>
      <button
        className="btn btn-link"
        type="button"
        onClick={() => setActionType("create")}
      >
        <i className="fas fa-plus" />
      </button>
      <button
        className="btn btn-link"
        type="button"
        onClick={() => setActionType("update")}
      >
        <i className="far fa-edit" />
      </button>
      <button
        className="btn btn-link"
        type="button"
        onClick={() => {
          deleteFunc(recordId, hideRow);
        }}
      >
        <i className="far fa-trash-alt" />
      </button>
      {buttonAction()}
      <ModalRoot />
    </div>
  );
};

export default TableButtons;
