// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import 'firebase/auth'
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPnzPyaHYfwWEAc0MYnwVg3MTs-5NwZwQ",
  authDomain: "test-e5596.firebaseapp.com",
  databaseURL: "https://test-e5596-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-e5596",
  storageBucket: "test-e5596.appspot.com",
  messagingSenderId: "274819939157",
  appId: "1:274819939157:web:6c2f571fa9c84fb3d9cddc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export default app;