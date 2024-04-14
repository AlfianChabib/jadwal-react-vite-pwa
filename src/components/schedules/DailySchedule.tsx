import { schedule } from "@/constants/schedule";
import { sendNotification } from "@/lib/sendNotif";
import { PrayerData } from "@/types/prayer";
import { useEffect, useState } from "react";
// import { getSurah } from "@/services/surah";
// import { useQuery } from "@tanstack/react-query";

interface Props {
  data: PrayerData[];
}

export default function DailySchedule(props: Props) {
  const { data } = props;
  const [displayNotif, setDisplayNotif] = useState(false);
  const day = new Date().getDay();

  const scheduleByDay = schedule.find((item) => item.dayId === day);

  const getTodayData = data?.find((item) => parseInt(item.date.gregorian.day) === day);

  const getTimings = getTodayData?.timings.Asr.split(" ")[0].split(":");
  // console.log(new Date(2024, 4, 14, parseInt(getTimings![0]), parseInt(getTimings![1]), 0));

  setInterval(() => {
    const date = new Date(2024, 4, 13, 22, 6, 30).getTime();
    const today = new Date().getTime();
    if (today < date) {
      setDisplayNotif(true);
    }
  }, 1000);
  useEffect(() => {
    clearInterval(
      setInterval(() => {
        if (displayNotif)
          sendNotification({
            title: "Jadwal Sholat",
            body: `${scheduleByDay?.day} - ${scheduleByDay?.surah}`,
            date: new Date(2024, 5, 14, parseInt(getTimings![0]), parseInt(getTimings![1]), 0),
          });
      }, 1000)
    );
  }, [getTimings, scheduleByDay?.day, scheduleByDay?.surah, displayNotif]);

  return (
    <div className="w-full flex flex-col gap-2">
      <h1>Jadwal Hari ini</h1>
      <div className="flex p-2 justify-between border rounded-md bg-white/5 backdrop-blur-md border-white/10">
        <p>{scheduleByDay?.day}</p>
        <p>{scheduleByDay?.surah}</p>
        <p>{data?.[0].timings.Asr}</p>
      </div>
    </div>
  );
}
