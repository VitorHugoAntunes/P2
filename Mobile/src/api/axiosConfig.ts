import axios from "axios";

const key = process.env.EXPO_PUBLIC_API_KEY
const url = process.env.EXPO_PUBLIC_API_LINK
export const api = axios.create({
  baseURL: `${url}${key}`
})