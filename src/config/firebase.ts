// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; //行追加
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVx1PogaFYEu95lm17HlODC9kz1B1Y5Pg",
  authDomain: "react-cours-cd049.firebaseapp.com",
  projectId: "react-cours-cd049",
  storageBucket: "react-cours-cd049.appspot.com",
  messagingSenderId: "782991039854",
  appId: "1:782991039854:web:e21e1baac45060723e357f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);                 //行追加
export const provider = new GoogleAuthProvider(); //行追加
