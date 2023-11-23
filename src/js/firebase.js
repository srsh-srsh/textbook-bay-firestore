// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxs31Rtaq3oupI02OonnEzs_mbIem_T5U",
  authDomain: "iccs340-a4ff9.firebaseapp.com",
  projectId: "iccs340-a4ff9",
  storageBucket: "iccs340-a4ff9.appspot.com",
  messagingSenderId: "799614679165",
  appId: "1:799614679165:web:b288507bbbc93f1aa15914"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export{
    db
}