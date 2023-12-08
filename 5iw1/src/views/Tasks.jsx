import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import TaskList from "../components/Tasks/TaskList";
import TaskItem from "../components/Tasks/TaskItem";
import TaskForm from "../components/Tasks/TaskForm";
import ListContainer from "../components/ListContainer";

export default function Tasks() {
  const TaskManager = useContext(TaskContext);

  return (
    <ListContainer
      container={TaskList}
      item={TaskItem}
      form={TaskForm}
      model={TaskManager}
    />
  );
}
