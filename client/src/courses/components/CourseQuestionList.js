//@flow
import React from "react";
import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";

type Props = {
  //redux-form - handles the form's submission.
  questionsList: any,
  //hooks
  setList: Function
};

const CourseQuestionList = (props: Props) => {
  const { questionsList, setList } = props;
  //syncronize the state of the application
  const onDragEnd = result => {
    const { destination, source, draggableId } = result;

    //no destination,return
    if (!destination) {
      return;
    }

    //if no change, return
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    //get original question order
    const newQuestionIds = Array.from(questionsList);
    //from the source index remove 1 item
    newQuestionIds.splice(source.index, 1);
    //from destination, remove nothing, enter new id
    newQuestionIds.splice(destination.index, 0, questionsList[source.index]);
    //set the new list
    setList(newQuestionIds);
  };

  return (
    // context of the drag and drop
    <DragDropContext onDragEnd={onDragEnd}>
      <Column title={"question list"} questions={questionsList} />
    </DragDropContext>
  );
};

export default CourseQuestionList;
