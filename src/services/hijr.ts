import { aladhan } from "@/api/axios";
import { TimingsData } from "@/types/timings";

export interface HijrPayload {
  date: string;
  latitude: number;
  longitude: number;
  method: number;
}

export const getDateHijr = async (payload: HijrPayload): Promise<TimingsData> => {
  const { date, latitude, longitude, method } = payload;
  return aladhan
    .get(`/timings/${date}?latitude=${latitude}&longitude=${longitude}&method=${method}`)
    .then((res) => res.data.data)
    .catch((err) => console.log(err));
};
