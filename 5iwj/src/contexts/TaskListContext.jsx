import { createContext, useState } from "react";
import {
  fetchTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../services/taskList";

export const TaskListContext = createContext();

export default function TaskListProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  const actions = {
    fetch: async (filters = {}) => {
      setLoading(true);
      fetchTasks(filters).then((tasks) => {
        setTasks(tasks);
        setLoading(false);
      });
    },
    create: async (task) => {
      setLoading(true);
      createTask(task).then((task) => {
        setTasks((tasks) => [...tasks, task]);
        setLoading(false);
      });
    },
    update: async (task) => {
      setLoading(true);
      updateTask(task).then((task) => {
        setTasks((tasks) => tasks.map((t) => (t.id === task.id ? task : t)));
        setLoading(false);
      });
    },
    delete: async (task) => {
      setLoading(true);
      deleteTask(task).then(() => {
        setTasks((tasks) => tasks.filter((t) => t.id !== task.id));
        setLoading(false);
      });
    },
  };

  const selectors = {
    get: () => tasks,
    isLoading: () => loading,
    search: (filters) =>
      tasks.filter((task) =>
        Object.keys(filters).every((k) => task[k] === filters[k])
      ),
  };

  return (
    <TaskListContext.Provider value={{ actions, selectors }}>
      {children}
    </TaskListContext.Provider>
  );
}
