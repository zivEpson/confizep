import _ from "lodash";
import React from "react";
import { UncontrolledCollapse, Button } from "reactstrap";

//display button and collapse
export const getButtonAndCollapse = (name, displayItem) => {
  return (
    <div>
      <Button
        outline
        color="link"
        id={name}
        size="sm"
        style={{ marginBottom: "1rem" }}
        className="mt-3"
      >
        {name}
      </Button>

      <UncontrolledCollapse toggler={"#" + name}>
        <div className="card ">
          <div className="card-body font-weight-light">{displayItem}</div>
        </div>
      </UncontrolledCollapse>
    </div>
  );
};

export const getListOfButtonsAndCollapses = (name, displayItemList) => {
  return _.map(displayItemList, (displayItem, index) => {
    return (
      <div key={index}>
        {getButtonAndCollapse(name + "-" + index, displayItem)}
      </div>
    );
  });
};
