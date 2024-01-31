import { useState } from "react";
import TaskForm from "../components/Tasks/TaskForm";
import TaskItem from "../components/Tasks/TaskItem";
import TaskList from "../components/Tasks/TaskList";
import ListContainer from "../lib/components/ListContainer";
import Button from "../lib/components/Button";

export default function TaskListView() {
  const [tasks, setTasks] = useState([
    { id: Date.now(), title: "Test", status: "completed" },
    { id: Date.now() + 745352, title: "Test 2", status: "not completed" },
  ]);

  const TaskManager = {
    add: (task) => {
      setTasks([...tasks, task]);
    },
    delete: (id) => {
      setTasks(tasks.filter((item) => item.id !== id));
    },
    edit: (id, newTask) => {
      setTasks(tasks.map((item) => (item.id === id ? newTask : item)));
    },
    get: () => tasks,
  };

  return (
    <div>
      <ListContainer
        model={TaskManager}
        container={TaskList}
        item={TaskItem}
        form={TaskForm}
      />
      <ListContainer
        model={TaskManager}
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
