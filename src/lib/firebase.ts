import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXc_bnz8jcRp1NkQMWjAjQKcyMdUAoNAM",
  authDomain: "course-planner-33d7a.firebaseapp.com",
  projectId: "course-planner-33d7a",
  storageBucket: "course-planner-33d7a.appspot.com",
  messagingSenderId: "247030040058",
  appId: "1:247030040058:web:2b99331e1d40c2fcd9d043",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth instance and Google provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
