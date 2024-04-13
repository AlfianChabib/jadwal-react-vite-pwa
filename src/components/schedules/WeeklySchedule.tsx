import { schedule } from "@/constants/schedule";

export default function WeeklySchedule() {
  return (
    <div className="w-full flex flex-col gap-2">
      <h1>Jadwal Mingguan</h1>
      {schedule.map((item, index) => (
        <div
          key={index}
          className="flex p-2 justify-between border rounded-md bg-white/5 backdrop-blur-md border-white/10"
        >
          <p>{item.day}</p>
          <p>{item.surah}</p>
        </div>
      ))}
    </div>
  );
}
