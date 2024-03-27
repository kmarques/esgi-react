import { useEffect, useState } from "react";
import TaskForm from "../components/Tasks/TaskForm";
import TaskItem from "../components/Tasks/TaskItem";
import TaskList from "../components/Tasks/TaskList";
import ListContainer from "../lib/components/ListContainer";
import Button from "../lib/components/Button";
import useTaskListActions from "../hooks/tasklist/useTaskListActions";
import useTaskListSelectors from "../hooks/tasklist/useTaskListSelectors";

export default function TaskListView() {
  const actions = useTaskListActions();
  const selectors = useTaskListSelectors();

  useEffect(() => {
    actions.fetch();
  }, []);

  return (
    <div>
      <ListContainer
        model={{ ...actions, ...selectors }}
        container={TaskList}
        item={TaskItem}
        form={TaskForm}
      />
      <ListContainer
        model={{ ...actions, ...selectors }}
        container={({ children }) => <ul>{children}</ul>}
        item={({ item, onDelete }) => (
          <li>
            {item.title} ({item.status})
            <Button
              onClick={() =>
                confirm(`Are you sure to delete '${item.title}' ?`) &&
                onDelete(item.id)
              }
            >
              Delete
            </Button>
          </li>
        )}
        form={TaskForm}
      />
    </div>
  );
}
