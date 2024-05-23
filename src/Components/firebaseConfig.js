// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb4jeFOwuYCKD7cAM2OTSGO7_1I88ILLQ",
  authDomain: "apitest-8ad1a.firebaseapp.com",
  projectId: "apitest-8ad1a",
  storageBucket: "apitest-8ad1a.appspot.com",
  messagingSenderId: "363436778232",
  appId: "1:363436778232:web:bd4cfd1bdab14ea41dd10d",
  measurementId: "G-QEHT0NSR0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db}
