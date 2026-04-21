x// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxtEgF5_YRMGtF1ywDz9rRJ3q1AIJr240",
  authDomain: "study-helper-chatbot.firebaseapp.com",
  projectId: "study-helper-chatbot",
  storageBucket: "study-helper-chatbot.firebasestorage.app",
  messagingSenderId: "576854641475",
  appId: "1:576854641475:web:40eda4b84ad5024ca4fdf6",
  measurementId: "G-6G6WX3YENT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);