// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD63HBp8YuA6isf_xEUh2p15MwMtV1QwKs",
  authDomain: "eyecare-43a88.firebaseapp.com",
  projectId: "eyecare-43a88",
  storageBucket: "eyecare-43a88.firebasestorage.app",
  messagingSenderId: "525139283620",
  appId: "1:525139283620:web:a21543b4f4d5c35d1e6031",
  measurementId: "G-26ERK180QR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth =  getAuth();
export { app , auth};  