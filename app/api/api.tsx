import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/vnd.github.v3+json",
  },
  timeout: 10000, // 10 seconds timeout
});
