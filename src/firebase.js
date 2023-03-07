// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTsVeyASORzwoEEqt56YCJ0iDPLfkG-j4",
  authDomain: "traka-lagoon.firebaseapp.com",
  projectId: "traka-lagoon",
  storageBucket: "traka-lagoon.appspot.com",
  messagingSenderId: "713599977941",
  appId: "1:713599977941:web:888661b47c3cc9622cd55c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage()

//export default app;