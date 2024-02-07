// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqvFvLobZGjRziTSG4OP1Vf0ye0Cnqdv4",
  authDomain: "webparcial2.firebaseapp.com",
  projectId: "webparcial2",
  storageBucket: "webparcial2.appspot.com",
  messagingSenderId: "513106959623",
  appId: "1:513106959623:web:fe76b6b4b6f69008e839a2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

console.log("Firebase initialized!", db);