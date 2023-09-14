// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHGN1QCzBlxSSSbbS0ohiOYlner0LdSk8",
  authDomain: "ideavoting-platform.firebaseapp.com",
  projectId: "ideavoting-platform",
  storageBucket: "ideavoting-platform.appspot.com",
  messagingSenderId: "23652483846",
  appId: "1:23652483846:web:c264855d393c35098f5487",
  measurementId: "G-0NGF4E0XC2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()