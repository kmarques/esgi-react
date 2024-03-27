import { useContext } from "react";
import { TaskListContext } from "../../contexts/TaskListContext";

export default function useTaskListSelectors() {
  const { selectors } = useContext(TaskListContext);
  return selectors;
}
