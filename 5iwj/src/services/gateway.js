import ApiService from "./api.js";
import LocalStorageService from "./localstorage.js";

export default function (endpoint) {
  let internetReachable = navigator.onLine;
  window.addEventListener("offline", (e) => {
    internetReachable = false;
  });

  window.addEventListener("online", (e) => {
    internetReachable = true;
  });
  const apiService = new ApiService(endpoint);
  const localStorageService = new LocalStorageService(endpoint);

  this.fetch = (filters) => {
    if (internetReachable) {
      return apiService.fetch(filters).then((dta) => {
        localStorageService.sync(data);
        return data;
      });
    } else {
      return localStorageService.fetch(filters);
    }
  };

  this.create = (data) => {
    if (internetReachable) {
      return apiService.create(data).then((data) => {
        localStorageService.sync(data);
        return data;
      });
    } else {
      return localStorageService.create(data);
    }
  };

  this.update = (data) => {
    if (internetReachable) {
      return apiService.update(data).then((data) => {
        localStorageService.sync(data);
        return data;
      });
    } else {
      return localStorageService.update(data);
    }
  };
  this.delete = (data) => {
    if (internetReachable) {
      return apiService.delete(data).then(() => {
        localStorageService.delete(data);
      });
    } else {
      return localStorageService.delete(data);
    }
  };
}
