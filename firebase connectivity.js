// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGgw0dfhYEFLY0iR2k3lcdSOF62teIZQw",
  authDomain: "project1-2dea6.firebaseapp.com",
  projectId: "project1-2dea6",
  storageBucket: "project1-2dea6.appspot.com",
  messagingSenderId: "67848971618",
  appId: "1:67848971618:web:18a86e53f2eec59d51383b",
  measurementId: "G-EFJRP4PX5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);