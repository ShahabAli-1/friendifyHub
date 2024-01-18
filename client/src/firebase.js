// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBhi_nJsXyfbT8JAIDrn0y81-Jz5cd2fZc",
  authDomain: "friendifyhub.firebaseapp.com",
  projectId: "friendifyhub",
  storageBucket: "friendifyhub.appspot.com",
  messagingSenderId: "882648206908",
  appId: "1:882648206908:web:07cabd059fa9e7196c3d39",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
