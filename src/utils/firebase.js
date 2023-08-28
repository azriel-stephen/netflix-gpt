// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB72ObguPV6_feiIsw7lnZ4IyEyLw57e-4",
  authDomain: "netflix-gpt-1f365.firebaseapp.com",
  projectId: "netflix-gpt-1f365",
  storageBucket: "netflix-gpt-1f365.appspot.com",
  messagingSenderId: "461759670031",
  appId: "1:461759670031:web:5bb31d0be88504e2d4007a",
  measurementId: "G-9B4LNB92QD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
