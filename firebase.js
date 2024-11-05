// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEpx2cZDmVO3tstLRy_Bmrz7h2VVVgi70",
  authDomain: "employeesystem-74ebd.firebaseapp.com",
  projectId: "employeesystem-74ebd",
  storageBucket: "employeesystem-74ebd.appspot.com",
  messagingSenderId: "571147264346",
  appId: "1:571147264346:web:a29e8054a679211c0b1363"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;