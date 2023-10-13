// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUZFoRNyQYIYHFW5p3yAwwK2DDRUQu8_g",
  authDomain: "coffeshop-4a139.firebaseapp.com",
  projectId: "coffeshop-4a139",
  storageBucket: "coffeshop-4a139.appspot.com",
  messagingSenderId: "44586200638",
  appId: "1:44586200638:web:20f341b03c272d300a6b6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//exportar la db a los archivos
export const db = getFirestore(app);