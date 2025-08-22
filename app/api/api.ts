import axios from "axios";

// Get the base API URL from environment variables
const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

// Validation and logging in development
if (import.meta.env.DEV) {
  console.log("🔧 Environment variables:", {
    VITE_BASE_API_URL: import.meta.env.VITE_BASE_API_URL,
    NODE_ENV: import.meta.env.NODE_ENV,
    MODE: import.meta.env.MODE,
  });

  if (!BASE_API_URL) {
    console.error("❌ VITE_BASE_API_URL is not defined! API calls will fail.");
  } else {
    console.log(`✅ API Base URL configured: ${BASE_API_URL}`);
  }
}

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
