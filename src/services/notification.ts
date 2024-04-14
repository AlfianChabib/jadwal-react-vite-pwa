import axios from "axios";
import { NotificationPayload } from "firebase/messaging";

// b90ba45ed6b47e40815690bb5505ee6057d5c4e2
// a01aa62692f888eefb5725dc3f7be969325b0ddc
// c2d1bb1f07b578730fabb7646e3e4a0f94d1f0ae
// 101148628563285076156

export const notification = axios.create({
  baseURL: "https://fcm.googleapis.com/v1/projects/jadwal-a7bdd/messages:send",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ya29.a0Ad52N38oI0sETJET6X6uqCpoJyjWF2ebE1Y4Jj2xqK5GpnSvJeTk-Ztl1pJxC5CVgsqmRyMiPSIL1WO1Hukb-JFInQIjiXdowKPELCW6jJennkyGdaQQUuRUOVz26O89zL_QKDSPHefYPpFtWcF3m02Vbr1xTMHWYxBtaCgYKAeESARESFQHGX2MiXrU6PdBc2WtYMlGZ1hJm3A0171`,
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
            body: "This is a message from FCM to web",
            requireInteraction: "true",
            badge: "/badge-icon.png",
          },
        },
      },
    })
    .then((res) => res.data)
    .catch((err) => err);
};
