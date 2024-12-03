import axios from "axios";

const api = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
  headers: {
    Accept: "application/json",
  },
});

export default api;
