import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMGPZy2zpqNlNZsFUhaiCVP4Tbajm_uqU",
  authDomain: "sd-event-2fcb1.firebaseapp.com",
  projectId: "sd-event-2fcb1",
  storageBucket: "sd-event-2fcb1.firebasestorage.app",
  messagingSenderId: "1081821888431",
  appId: "1:1081821888431:web:d4ace80b01f9298546795a",
  measurementId: "G-56H4K1DKHT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
