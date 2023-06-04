// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyBi-1t8TkLj3ZuBX1kaaqRtBkd8hDLec8Q",

  authDomain: "ericwebsite-f8bc6.firebaseapp.com",

  projectId: "ericwebsite-f8bc6",

  storageBucket: "ericwebsite-f8bc6.appspot.com",

  messagingSenderId: "10101000677",

  appId: "1:10101000677:web:e3bdc32db3ad9b1e2fc70c",

  measurementId: "G-FREDS1GGTH"

};
initializeApp(firebaseConfig);
export const auth = getAuth();
export default getFirestore();