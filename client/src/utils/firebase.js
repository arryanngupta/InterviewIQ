// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-25ef3.firebaseapp.com",
  projectId: "interviewiq-25ef3",
  storageBucket: "interviewiq-25ef3.firebasestorage.app",
  messagingSenderId: "154998417647",
  appId: "1:154998417647:web:2a448490b6c7f7d09f931a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth,provider}