import { sendNotification } from "@/lib/sendNotif";
import { useCallback, useEffect } from "react";

export default function Notif() {
  const requestNotificationPermission = useCallback(() => {
    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          sendNotification({
            title: "ServiceWorker Cookbook",
            body: "Notification permission granted",
          });
        }
      });
    }
  }, []);

  useEffect(() => {
    if ("Notification" in window) requestNotificationPermission();
  }, [requestNotificationPermission]);

  return null;
}
