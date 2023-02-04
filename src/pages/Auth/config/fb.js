// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADIRLSHtIUJj71vd_g_C--MYU14QjCxlk",
  authDomain: "acelera-d91e9.firebaseapp.com",
  projectId: "acelera-d91e9",
  storageBucket: "acelera-d91e9.appspot.com",
  messagingSenderId: "1072115392988",
  appId: "1:1072115392988:web:4c623ebbfa06e68dd4ef19",
  measurementId: "G-FYH56W6B0G"
};

// Initialize Firebase
const fireAccess = initializeApp(firebaseConfig);
const analytics = getAnalytics(fireAccess);

export const db = getFirestore(fireAccess);
export default fireAccess