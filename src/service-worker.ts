import { precacheAndRoute } from "workbox-precaching";

declare let self: ServiceWorkerGlobalScope;

precacheAndRoute(self.__WB_MANIFEST);

const version = "my-sw 1";
const CACHE_NAME = "my-sw-cache";
const filesToCache = ["/data.json"];

const main = async () => {
  console.log(`Service Worker ${version} is starting ...`);
};

main().catch(console.error);

self.addEventListener("install", async (event) => {
  console.log(`Service Worker ${version} is installed`);
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(filesToCache)));
});

self.addEventListener("fetch", async (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }
        const clonedResponse = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, clonedResponse);
        });
        return response;
      });
    })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Service Worker: Clearing Old Cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

interface NotificationPayload {
  body: string;
}

function sendNotification(title: string, options: NotificationPayload) {
  self.registration.showNotification(title, options);
}

async function scheduleNotification() {
  setInterval(() => {
    // const data: { notif: { title: string; body: string } } = await new Promise((resolve) =>
    //   fetch("http://localhost:5173/data.json").then((res) => resolve(res.json()))
    // );
    // if (data)
    sendNotification("Jadwal", {
      body: "Membaca jadwal sholat",
    });
  }, 3000);
}

self.addEventListener("install", async (event) => {
  event.waitUntil(scheduleNotification());
});
