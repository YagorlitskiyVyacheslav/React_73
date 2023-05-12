import axios from "axios";
import { API_URL } from "../constants/api";

export const instanse = axios.create({
  baseURL: API_URL,
});
