import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB80hxlDPO89sh69IMuogO09-yZkkW8SV4",
  authDomain: "raajit-18ac1.firebaseapp.com",
  projectId: "raajit-18ac1",
  storageBucket: "raajit-18ac1.appspot.com",
  messagingSenderId: "97753905288",
  appId: "1:97753905288:web:60597b72a9c46df6bc073d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
