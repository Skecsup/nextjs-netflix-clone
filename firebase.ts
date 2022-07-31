import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGxJeVBDCGK2c6sOoLW-7KnyP5PXz-xjs",
  authDomain: "nextjs-netflix-clone-92ef9.firebaseapp.com",
  projectId: "nextjs-netflix-clone-92ef9",
  storageBucket: "nextjs-netflix-clone-92ef9.appspot.com",
  messagingSenderId: "222226488701",
  appId: "1:222226488701:web:ba711517478d0fab080014",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
