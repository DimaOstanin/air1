// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN-LMbxlPpofqWT7CnI4-Myj1j9cfKugQ",
  authDomain: "air1-8b2ff.firebaseapp.com",
  projectId: "air1-8b2ff",
  storageBucket: "air1-8b2ff.appspot.com",
  messagingSenderId: "56123537875",
  appId: "1:56123537875:web:f44c4914127ce724391726",
  measurementId: "G-7TC2EZ37SR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);