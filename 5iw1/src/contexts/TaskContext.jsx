import { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks") || "[]")
  );

  const TaskManager = {
    get: () => tasks,
    add: (newItem) => {
      newItem.id = Date.now();
      const newTasks = [...tasks, newItem];
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      setTasks(newTasks);
    },
    delete: (item) => {
      const newTasks = tasks.filter((task) => task.id !== item.id);
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      setTasks(newTasks);
    },
    edit: (item) => {
      const newTasks = tasks.map((task) => {
        if (task.id === item.id) {
          return item;
        }

        return task;
      });
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      setTasks(newTasks);
    },
  };
  return (
    <TaskContext.Provider value={TaskManager}>{children}</TaskContext.Provider>
  );
};
