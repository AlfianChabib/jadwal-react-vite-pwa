import axios from "axios";

const aladhanApiUrl = import.meta.env.VITE_ALADHAN_API_BASE_URL;

export const aladhan = axios.create({
  baseURL: aladhanApiUrl,
  headers: { "Content-Type": "application/json" },
});
