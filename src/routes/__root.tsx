import Header from "@/components/Header";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

const isProd = import.meta.env.PROD;

export const Route = createRootRoute({
  component: () => (
    <main className="container bg-black max-w-[600px] p-0">
      <div className="flex flex-col items-center bg-[url('./assets/bg.png')] w-full min-h-screen bg-center bg-cover p-2">
        <Header />
        <Outlet />
        {isProd ? null : <TanStackRouterDevtools />}
      </div>
    </main>
  ),
});
