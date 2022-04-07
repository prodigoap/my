import React, { createContext, useEffect } from "react";
import firebaseConfig from "./firebaseConfig";
import * as firebase from "firebase/app";
import "firebase/database";
const FirebaseContext = createContext(null);
export { FirebaseContext };

export default ({ children }) => {
    firebase.initializeApp(firebaseConfig);
  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  );
};
