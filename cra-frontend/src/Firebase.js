// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAnE-fxBBrbVxKLq8Net8QWE4_tSLSgpeE",
  authDomain: "adaptability-f7b2a.firebaseapp.com",
  projectId: "adaptability-f7b2a",
  storageBucket: "adaptability-f7b2a.appspot.com",
  messagingSenderId: "692035188659",
  appId: "1:692035188659:web:02a0f61bff3bce0cdd3dc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth()
const googleProvider = new GoogleAuthProvider()
const db =getFirestore(app)

export{app,googleProvider,auth,db}