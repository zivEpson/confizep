import React from "react";
import { Draggable } from "react-beautiful-dnd";

function CourseQuestion(props) {
  const { question, index } = props;
  return (
    <Draggable draggableId={question._id} index={index}>
      {(provided, snapshot) => (
        <div
          className="card border-dark mb-3"
          style={{ maxWidth: "8rem" }}
          key={question._id}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="card-body text-dark">
            <h5 className="card-title">{question.title}</h5>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default CourseQuestion;
