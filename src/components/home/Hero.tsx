import { getDateHijr } from "@/services/hijr";
import { usePrayerStore } from "@/stores/usePrayerStore";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns/fp";

export default function Hero() {
  const { position } = usePrayerStore((state) => state);
  const date = format("dd-MM-yyyy", new Date());
  const { data: hijrDate, isLoading } = useQuery({
    queryKey: ["time", position, date],
    queryFn: () => getDateHijr({ date, latitude: position.latitude, longitude: position.longitude, method: 20 }),
  });

  const dateHijr = `${hijrDate?.date.hijri.day} ${hijrDate?.date.hijri.month.en} ${hijrDate?.date.hijri.year}`;
  const dateGreg = `${hijrDate?.date.gregorian.day} ${hijrDate?.date.gregorian.month.en} ${hijrDate?.date.gregorian.year}`;

  console.log(hijrDate);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col p-2 items-center border rounded-md bg-white/5 backdrop-blur-md border-white/10">
      <p className="flex w-full justify-center">Famy Bisyauqin.</p>
      <p className="text-sm font-light">
        {dateGreg} / {dateHijr}
      </p>
    </div>
  );
}
