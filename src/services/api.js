import axios from "axios";

export const api = axios.create({
  baseURL: "https://foodexplorer-api-8d9b.onrender.com"
});