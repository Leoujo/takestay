import axios from "axios";

const URL = "http://localhost:8000/api";

export const axiosClient = axios.create({
  baseURL: URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Use interceptors to pass the token here.
