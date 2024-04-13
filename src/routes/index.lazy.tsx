import { getMyPosition } from "@/services/position";
import { getPrayeTime } from "@/services/prayer";
import { useEffect } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { usePrayerStore } from "@/stores/usePrayerStore";
import { PrayerData } from "@/types/prayer";
import { useQuery } from "@tanstack/react-query";
import DailySchedule from "@/components/schedules/DailySchedule";
import WeeklySchedule from "@/components/schedules/WeeklySchedule";
import Hero from "@/components/home/Hero";

export const Route = createLazyFileRoute("/")({ component: Index });

function Index() {
  const { setPosition, position } = usePrayerStore((state) => state);
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;

  useEffect(() => {
    getMyPosition().then((data) => {
      setPosition(data);
    });
  }, [setPosition, position]);

  const { data } = useQuery<PrayerData[]>({
    queryKey: ["prayerData", position, year, month],
    queryFn: () =>
      getPrayeTime({
        latitude: position.latitude,
        longitude: position.longitude,
        month: month,
        year: year,
        method: 20,
      }),
  });

  console.log(data?.find((item) => item.date.gregorian.day === "Thursday"));

  return (
    <section className="flex flex-col w-full mt-4 gap-2">
      <Hero />
      <DailySchedule />
      <WeeklySchedule />
    </section>
  );
}
