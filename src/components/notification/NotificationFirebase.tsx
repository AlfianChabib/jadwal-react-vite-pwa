// import { generateToken, messaging } from "@/firebase";
// import { sendNotification } from "@/lib/sendNotif";
// import { onMessage } from "firebase/messaging";
// import { useEffect } from "react";

// export default function NotificationFirebase() {
//   useEffect(() => {
//     generateToken();
//     onMessage(messaging, (payload) => {
//       if (payload.notification)
//         sendNotification({
//           title: payload.notification.title!,
//           body: payload.notification.body!,
//         });
//     });
//   });

//   return null;
// }
