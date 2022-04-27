// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3uKy2BwRocXVsIEG1LivLMMGGUxeKSMk",
    authDomain: "marvelclothing-248ba.firebaseapp.com",
    projectId: "marvelclothing-248ba",
    storageBucket: "marvelclothing-248ba.appspot.com",
    messagingSenderId: "288632212806",
    appId: "1:288632212806:web:15a7a54f68ac881c1b6947",
    measurementId: "G-NGQEYTB3X1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
