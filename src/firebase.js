import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyATxOv4VM5j2D9tvcpthkUJG26fqM-Dpmg",
  authDomain: "might-teens-church.firebaseapp.com",
  projectId: "might-teens-church",
  storageBucket: "might-teens-church.appspot.com",
  messagingSenderId: "973483045615",
  appId: "1:973483045615:web:d8ca19496450526081611a",
  measurementId: "G-07ZY00SS0R"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);