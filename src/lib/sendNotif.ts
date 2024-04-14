interface NotificationPayload {
  title: string;
  body: string;
  date?: Date;
}

export const sendNotification = (payload: NotificationPayload) => {
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification(payload.title, { body: payload.body });
  }
};
