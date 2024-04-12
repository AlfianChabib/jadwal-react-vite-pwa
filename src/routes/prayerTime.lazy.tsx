import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/prayerTime")({ component: PrayerTime });

function PrayerTime() {
  return <div>prayerTime.lazy</div>;
}
