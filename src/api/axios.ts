import axios from "axios";

// const aladhanApiUrl = import.meta.env.VITE_ALADHAN_API_BASE_URL;

export const aladhan = axios.create({
  baseURL: "https://api.aladhan.com/v1/",
  headers: { "Content-Type": "application/json" },
});

export const equran = axios.create({
  baseURL: "https://equran.id/api/v2/",
  headers: { "Content-Type": "application/json" },
});
