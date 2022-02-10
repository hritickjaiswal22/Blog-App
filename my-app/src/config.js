import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://hritickblog.herokuapp.com/api/",
});
