// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "acbloggohpur.firebaseapp.com",
  projectId: "acbloggohpur",
  storageBucket: "acbloggohpur.appspot.com",
  messagingSenderId: "1031100409654",
  appId: "1:1031100409654:web:ccd01a0071b4e808363597"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);