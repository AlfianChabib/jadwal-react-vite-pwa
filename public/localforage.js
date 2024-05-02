function sendNotification(title, options) {
  self.registration.showNotification(title, options);
}

// Schedule notification at 6 AM
async function scheduleNotification() {
  const notifData = JSON.parse(localStorage.getItem("notif"));
  setInterval(() => {
    sendNotification(notifData.title, {
      body: notifData.body,
    });
    console.log("notif");
  }, 3000);
}

self.addEventListener("install", (event) => {
  event.waitUntil(scheduleNotification());
});
