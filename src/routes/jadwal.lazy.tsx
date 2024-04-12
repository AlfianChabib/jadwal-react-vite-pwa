import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/jadwal")({
  component: Jadwal,
});

export default function Jadwal() {
  return <div>jadwal</div>;
}
