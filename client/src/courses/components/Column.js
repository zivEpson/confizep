import React from "react";
import { Droppable } from "react-beautiful-dnd";

import CourseQuestion from "./CourseQuestion";
import "../courses.css";

const Column = props => {
  return (
    <div>
      <Droppable droppableId={1} direction={"horizontal"}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={"scrolling-wrapper-flexbox"}
          >
            {props.questions.map((question, index) => (
              <CourseQuestion
                key={question._id}
                question={question}
                index={index}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
