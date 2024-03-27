import { useContext } from "react";
import { TaskListContext } from "../../contexts/TaskListContext";

export default function useTaskListActions() {
  const { actions } = useContext(TaskListContext);
  return actions;
}
