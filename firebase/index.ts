// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.NEXT_PUBLIC_FIREBASE}`,
  authDomain: `${process.env.NEXT_PUBLIC_FB_DOMAIN}`,
  projectId: `${process.env.NEXT_PUBLIC_FB_PROJECT_ID}`,
  storageBucket: `${process.env.NEXT_PUBLIC_FB_STORAGE}`,
  messagingSenderId: `${process.env.NEXT_PUBLIC_SENDER}`,
  appId: `${process.env.NEXT_PUBLIC_APP_ID}`,
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export {db};
