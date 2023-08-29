// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvBVOWlv0-aXZbzFiS4YKkSSoHJ9-h9KI",
  authDomain: "crown-clown-db-356hfdt3.firebaseapp.com",
  projectId: "crown-clown-db-356hfdt3",
  storageBucket: "crown-clown-db-356hfdt3.appspot.com",
  messagingSenderId: "125502304683",
  appId: "1:125502304683:web:f79502ddcd2cf51b0a22ee",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
};
