const API_URL = import.meta.env.VITE_API_URL;

export default function (endpoint) {
  endpoint = `${API_URL}${endpoint}`;
  this.fetch = async (filters) => {
    const data = JSON.parse(localStorage.getItem(endpoint)) || [];
    return data.filter((item) =>
      Object.keys(filters).every((k) => item[k] === filters[k])
    );
  };

  this.create = async (data) => {
    const items = JSON.parse(localStorage.getItem(endpoint)) || [];
    const item = { ...data, id: Date.now() };
    items.push(item);
    localStorage.setItem(endpoint, JSON.stringify(items));
    return item;
  };

  this.update = async (data) => {
    const items = JSON.parse(localStorage.getItem(endpoint)) || [];
    const index = items.findIndex((item) => item.id === data.id);
    items[index] = data;
    localStorage.setItem(endpoint, JSON.stringify(items));
    return data;
  };
  this.delete = async (data) => {
    const items = JSON.parse(localStorage.getItem(endpoint)) || [];
    const index = items.findIndex((item) => item.id === data.id);
    items.splice(index, 1);
    localStorage.setItem(endpoint, JSON.stringify(items));
  };
  this.sync = async (data) => {
    if (Array.isArray(data))
      localStorage.setItem(endpoint, JSON.stringify(data));
    else {
      const items = JSON.parse(localStorage.getItem(endpoint)) || [];
      const index = items.findIndex((item) => item.id === data.id);
      if (index !== -1) items[index] = data;
      else items.push(data);
      localStorage.setItem(endpoint, JSON.stringify(items));
    }
  };
}
