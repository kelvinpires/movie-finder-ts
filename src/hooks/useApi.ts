import axios from "axios";

export const API_URL = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
