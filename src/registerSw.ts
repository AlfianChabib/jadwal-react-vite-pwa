// import { notif } from "./constants/notit";

const checkPermission = () => {
  if (!("serviceWorker" in navigator)) {
    throw new Error("No support for service worker!");
  }

  if (!("Notification" in window)) {
    throw new Error("No support for notification API");
  }

  if (!("PushManager" in window)) {
    throw new Error("No support for Push API");
  }
};

const requestNotificationPermission = async () => {
  const permission = await Notification.requestPermission();
  if (permission !== "granted") {
    throw new Error("Permission not granted");
  }
  console.log("Notification permission granted");
};

// function randomNotification() {
//   const randomItem = Math.floor(Math.random() * notif.length);
//   const notifTitle = notif[randomItem].name;
//   const notifBody = `Created by ${notif[randomItem].author}.`;
//   const notifImg = `data/img/${notif[randomItem].slug}.jpg`;
//   const options = {
//     body: notifBody,
//     icon: notifImg,
//   };
//   new Notification(notifTitle, options);
//   setTimeout(randomNotification, 10000);
// }

export async function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register(
      "/src/service-worker.ts",
      // import.meta.env.MODE === "production" ? "/service-worker.ts" : "/dev-sw.js?dev-sw",
      { type: import.meta.env.MODE === "production" ? "classic" : "module" }
    );
  }
  // randomNotification();
  checkPermission();
  await requestNotificationPermission();
}

// (function () {
//   //check to see if local storage is supported
//   if (window.localStorage) console.log("Local Storage Supported");
//   else console.log("Local Storage not supported in browser");
//   //prompt user for username and age
//   const username = "alfian";
//   const age = "25";
//   //add username and age to localstorage
//   window.localStorage.setItem("username", username!);
//   window.localStorage.setItem("age", age!);
//   //show number of objects stored
//   console.log(window.localStorage.length);
//   //get items from local storage
//   console.log(window.localStorage.getItem("username"));
//   console.log(window.localStorage.getItem("age"));
// })();
