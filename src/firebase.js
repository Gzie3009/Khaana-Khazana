// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvNU2ojkmqvIueMoAj6E-RMAcbWU_NtwQ",
  authDomain: "khaana-khazana.firebaseapp.com",
  projectId: "khaana-khazana",
  storageBucket: "khaana-khazana.appspot.com",
  messagingSenderId: "110587008861",
  appId: "1:110587008861:web:0a90c8303d3fa31508bab4",
  measurementId: "G-QKFV8G7QNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);