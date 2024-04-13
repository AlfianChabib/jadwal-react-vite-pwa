import { schedule } from "@/constants/schedule";
// import { getSurah } from "@/services/surah";
// import { useQuery } from "@tanstack/react-query";

export default function DailySchedule() {
  // const { data } = useQuery({
  //   queryKey: ["surahs"],
  //   queryFn: getSurah,
  // });
  const day = new Date().getDay();
  const scheduleByDay = schedule.find((item) => item.dayId === day);

  return (
    <div className="w-full flex flex-col gap-2">
      <h1>Jadwal Hari ini</h1>
      <div className="flex p-2 justify-between border rounded-md bg-white/5 backdrop-blur-md border-white/10">
        <p>{scheduleByDay?.day}</p>
        <p>{scheduleByDay?.surah}</p>
      </div>
    </div>
  );
}
