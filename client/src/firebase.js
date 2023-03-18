// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa9tyPVeT2nEYlcImaX5VsiyFx_ExttQM",
  authDomain: "chatapp-34ab9.firebaseapp.com",
  projectId: "chatapp-34ab9",
  storageBucket: "chatapp-34ab9.appspot.com",
  messagingSenderId: "307831995586",
  appId: "1:307831995586:web:4c6b14b6f41d4e39980f5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);