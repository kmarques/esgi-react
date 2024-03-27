import api from "./gateway";

const Api = new api("/tasks");

export const fetchTasks = (filters) => {
  return Api.fetch(filters);
};
export const createTask = (task) => {
  return Api.create(task);
};
export const updateTask = (task) => {
  return Api.update(task);
};
export const deleteTask = (task) => {
  return Api.delete(task);
};
