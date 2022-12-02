import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAy_Fy8TdOozgt7dbo0-f1P8c0Jg7y5eDs",
  authDomain: "take-stay.firebaseapp.com",
  projectId: "take-stay",
  storageBucket: "take-stay.appspot.com",
  messagingSenderId: "899213680164",
  appId: "1:899213680164:web:f30648838563c034e942b1",
  measurementId: "G-NQ0QBN24T2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);
