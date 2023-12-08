import React, { useContext } from "react";
import { TaskContext } from "../../contexts/TaskContext";

export default function TaskBadge() {
  const { get } = useContext(TaskContext);
  const taskCount = get().filter((item) => !item.completed).length;

  return <div>Task not completed ({taskCount})</div>;
}
