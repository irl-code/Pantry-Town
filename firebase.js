// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU-9ordRuSBy89HaHm4nlQ8AE0hyFOWWg",
  authDomain: "pantry-town.firebaseapp.com",
  projectId: "pantry-town",
  storageBucket: "pantry-town.appspot.com",
  messagingSenderId: "1053154281599",
  appId: "1:1053154281599:web:e0991a598333562744174a",
  measurementId: "G-J1NQYG1M2E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export { firestore };