// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKFjWZUOy2Ff2oNCC3-BO8gQfMwK2yp8U",
  authDomain: "react-dragon-auth-aa7c9.firebaseapp.com",
  projectId: "react-dragon-auth-aa7c9",
  storageBucket: "react-dragon-auth-aa7c9.appspot.com",
  messagingSenderId: "771493679605",
  appId: "1:771493679605:web:1a869c48be2fb00807d0bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)