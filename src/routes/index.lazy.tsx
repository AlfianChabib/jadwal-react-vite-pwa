import { getMyPosition } from "@/services/position";
import { getPrayeTime } from "@/services/prayer";
import { useEffect } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { usePrayerStore } from "@/stores/usePrayerStore";
import { PrayerData } from "@/types/prayer";
import { useQuery } from "@tanstack/react-query";

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

  const { data: prayerData } = useQuery<PrayerData[]>({
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

  console.log(prayerData?.[9].timings);

  return (
    <section className="flex flex-col w-full">
      {prayerData?.map((item, index) => {
        return <div key={index}>{item.timings.Fajr && <p>{item.timings.Fajr}</p>}</div>;
      })}
    </section>
  );
}
