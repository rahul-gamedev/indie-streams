// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvb5Dy0mnlM1ObcIIujdt3KVBWJroCh0U",
  authDomain: "indiestreams-7c57c.firebaseapp.com",
  projectId: "indiestreams-7c57c",
  storageBucket: "indiestreams-7c57c.appspot.com",
  messagingSenderId: "577123168321",
  appId: "1:577123168321:web:700be0cf0e7a599ef456c0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const database = getFirestore(app);
