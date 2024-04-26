// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDKBnI4zTJOdQiMV-4cIqDPdO2T-s1-R5s",
  authDomain: "vite-avian.firebaseapp.com",
  projectId: "vite-avian",
  storageBucket: "vite-avian.appspot.com",
  messagingSenderId: "803421483886",
  appId: "1:803421483886:web:b34d50cd5fd3b2da13c77f",
  measurementId: "G-4Q0PQWHWPR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export { app, auth };