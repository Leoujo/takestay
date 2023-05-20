import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

export const axiosClient = axios.create({
  baseURL: URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
