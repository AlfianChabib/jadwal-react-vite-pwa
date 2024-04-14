import axios from "axios";
import { NotificationPayload } from "firebase/messaging";

const googleAccessToken = import.meta.env.VITE_GOOGLE_ACCESS_TOKEN;

export const notification = axios.create({
  baseURL: "https://fcm.googleapis.com/v1/projects/jadwal-a7bdd/messages:send",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${googleAccessToken}`,
  },
});

export const sendNotification = (payload: NotificationPayload, token: string) => {
  notification
    .post("", {
      message: {
        token: token,
        notification: {
          title: payload.title,
          body: payload.body,
        },
        webpush: {
          headers: {
            Urgency: "high",
          },
          notification: {
            body: payload.body,
            title: payload.title,
            requireInteraction: "true",
          },
        },
      },
    })
    .then((res) => res.data)
    .catch((err) => err);
};
