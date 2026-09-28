import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC97_yM7bJnP74cCxGL01EIV8dIWFQiUmo",
  authDomain: "k-ai-web.firebaseapp.com",
  projectId: "k-ai-web",
  storageBucket: "k-ai-web.firebasestorage.app",
  messagingSenderId: "491166928306",
  appId: "1:491166928306:web:3bcd12fabbaca258f568ab",
  measurementId: "G-NQTJN8F9GT"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
