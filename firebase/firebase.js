import firebaseConfig from "./firebaseConfig";
import  "firebase/compat/firestore";
import firebase from "firebase/compat/app";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
export default db;



