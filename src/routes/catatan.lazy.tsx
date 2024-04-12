import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/catatan")({
  component: Catatan,
});

function Catatan() {
  return (
    <section className="flex flex-col w-full">
      <h1>Hello</h1>
    </section>
  );
}
