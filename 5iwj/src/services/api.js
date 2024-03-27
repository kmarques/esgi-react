const API_URL = import.meta.env.VITE_API_URL;

export default function (endpoint) {
  endpoint = `${API_URL}${endpoint}`;
  this.fetch = (filters) => {
    const params = new URLSearchParams(filters);
    return fetch(`${endpoint}?${params.toString()}`).then((res) => res.json());
  };

  this.create = (data) => {
    return fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  };

  this.update = (data) => {
    return fetch(`${endpoint}/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  };
  this.delete = (data) => {
    return fetch(`${endpoint}/${data.id}`, {
      method: "DELETE",
    }).then((res) => res.json());
  };
}
