import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzusMweVu6M_6NWwb3Pra8mYBIo22FljE",
  authDomain: "ossproj-liveon.firebaseapp.com",
  projectId: "ossproj-liveon",
  storageBucket: "ossproj-liveon.appspot.com",
  messagingSenderId: "281555855314",
  appId: "1:281555855314:web:59be9e894d1d1274d34a0b",
  measurementId: "G-Z9MEDZ6BMK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export { auth, db };
export default app;
