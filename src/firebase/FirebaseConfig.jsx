// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCestooFck7cJYNSb8B2aMvPN24P_hHLEE",
  authDomain: "dash-5.firebaseapp.com",
  projectId: "dash-5",
  storageBucket: "dash-5.appspot.com",
  messagingSenderId: "564531843512",
  appId: "1:564531843512:web:e8fa91833280121d02ff4d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
