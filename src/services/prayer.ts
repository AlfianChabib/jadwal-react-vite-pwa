import { aladhan } from "@/api/axios";
import { PrayerData } from "@/types/prayer";

interface GetPrayerPayload {
  year: number;
  month: number;
  latitude: number;
  longitude: number;
  method: number;
}

export const getPrayeTime = async (payload: GetPrayerPayload) => {
  const { latitude, longitude, year, month, method } = payload;
  return new Promise<PrayerData[]>((resolve, reject) => {
    aladhan
      .get(`/calendar/${year}/${month}?latitude=${latitude}&longitude=${longitude}&method=${method}`)
      .then((res) => resolve(res.data.data))
      .catch((err) => reject(err));
  });
  // return await aladhan
  //   .get(`/calendar/${year}/${month}?latitude=${latitude}&longitude=${longitude}&method=${method}`)
  //   .then((res) => res.data.data);
};
