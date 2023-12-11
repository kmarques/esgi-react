import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext([1]);

export default function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const TaskManager = {
    selectors: {
      get: () => Object.values(tasks).map((t) => ({ ...t, default: 3 })),
      count: () => tasks.filter((t) => t.status === "live").length,
      getTask: (id) => {
        return tasks.find((t) => t.id == id);
      },
    },
    actions: {
      fetch: () => {
        const data = JSON.parse(localStorage.getItem("tasks") || "[]");
        setTasks(data);
      },
      add: (item) => {
        item.id = Date.now();
        const newData = [...tasks, item];
        localStorage.setItem("tasks", JSON.stringify(newData));
        setTasks(newData);
      },
      delete: (item) => {
        const newData = tasks.filter((t) => t.id !== item.id);
        localStorage.setItem("tasks", JSON.stringify(newData));
        setTasks(newData);
      },
      edit: (newData, item) => {
        const newTasks = tasks.map((t) => {
          if (t.id === item.id) {
            return {
              ...t,
              ...newData,
            };
          }
          return t;
        });
        localStorage.setItem("tasks", JSON.stringify(newTasks));
        setTasks(newTasks);
      },
    },
  };
  useEffect(() => {
    console.log("Setup", tasks.length);
    //connect WebTr

    return () => {
      console.log("Cleanup", tasks.length);
      //disconnect WebTr
    };
  }, [tasks]);

  useEffect(() => {
    console.log("Mount");
    //connect WebTr

    return () => {
      console.log("willUnmount");
      //disconnect WebTr
    };
  }, []);

  useEffect(() => {
    console.log("Mount (Infinity rerender)");
    setLoading(true);
    //connect WebTr
  }, [setLoading]);

  return (
    <TaskContext.Provider value={TaskManager}>{children}</TaskContext.Provider>
  );
}
