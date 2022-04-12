import firebaseConfig from "./firebaseConfig";
import { initializeApp, getApp } from "firebase/app";
import { getFirestore}  from "firebase/firestore";
import { getAuth } from "firebase/auth";
import firebase from "./firebase"
import "firebase/firestore";

const createFirebaseApp = ( firebaseConfig) => {
  try {
    return getApp();
  } catch (e) {
    return firebase.initializeApp(firebaseConfig);
  }
};

const firebaseApp = createFirebaseApp(firebaseConfig)
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp );
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
export default db;
export const signIn = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export const resetPassword = (email) =>
  firebase.auth().sendPasswordResetEmail(email);

export const getToken = () => firebase.auth().currentUser.getIdToken();

