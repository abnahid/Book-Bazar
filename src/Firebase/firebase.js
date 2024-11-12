// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGRT_dGKKDsrOcoihwrgpjUWV4aARER5Y",
  authDomain: "book-bazar-55a42.firebaseapp.com",
  projectId: "book-bazar-55a42",
  storageBucket: "book-bazar-55a42.firebasestorage.app",
  messagingSenderId: "515867471457",
  appId: "1:515867471457:web:00f2ce4cb001d061a1c420",
  measurementId: "G-EXL1214BSJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
