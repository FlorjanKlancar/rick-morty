// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3pNySVqpLGb_gZK70zmCJjmb9rznt9aE",
  authDomain: "rick-morty-cac89.firebaseapp.com",
  projectId: "rick-morty-cac89",
  storageBucket: "rick-morty-cac89.appspot.com",
  messagingSenderId: "6921195714",
  appId: "1:6921195714:web:e5251e4bb11042af3eab5b",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export {db};
