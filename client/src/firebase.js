// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "dreamscapedwellings-80e00.firebaseapp.com",
    projectId: "dreamscapedwellings-80e00",
    storageBucket: "dreamscapedwellings-80e00.appspot.com",
    messagingSenderId: "837810582310",
    appId: "1:837810582310:web:28950e1c5736e6d2c4c7e7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
