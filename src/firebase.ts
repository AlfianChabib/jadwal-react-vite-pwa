// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getMessaging, getToken } from "firebase/messaging";

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "jadwal-a7bdd.firebaseapp.com",
  projectId: "jadwal-a7bdd",
  storageBucket: "jadwal-a7bdd.appspot.com",
  messagingSenderId: "907234199305",
  appId: "1:907234199305:web:0f200b2893ad85f542b5d8",
  measurementId: "G-BFZJRZLQ7M",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const messaging = getMessaging(app);

export const generateToken = async () => {
  const permission = await Notification.requestPermission();
  if (permission === "granted") {
    const token = await getToken(messaging, {
      vapidKey: "BEYwdMeDSW-WYxqt9meYpL-fRYgXNe5dJyn1hryXiCpteZXPKpAwmuoojdOcEtbu70TrsxhppedxLcvvyZnrz5I",
    });
    localStorage.setItem("fcmToken", token);
  }
};
