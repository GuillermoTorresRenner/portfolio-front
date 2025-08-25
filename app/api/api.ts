import axios from "axios";

// Get the base API URL from environment variables
const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

// Throw error if no API URL is configured
if (!BASE_API_URL) {
  throw new Error("VITE_BASE_API_URL environment variable is required");
}

export const api = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 seconds timeout
});
