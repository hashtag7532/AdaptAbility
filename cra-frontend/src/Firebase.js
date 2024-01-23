// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCh_nE7zEUkRLpAAEF7HLHE9MevNDRvutE",
  authDomain: "disability-7d311.firebaseapp.com",
  projectId: "disability-7d311",
  storageBucket: "disability-7d311.appspot.com",
  messagingSenderId: "543214743227",
  appId: "1:543214743227:web:8307604e15125a4d9d439e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth()
const googleProvider = new GoogleAuthProvider()
const db =getFirestore(app)

export{app,googleProvider,auth,db}