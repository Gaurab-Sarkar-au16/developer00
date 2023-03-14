import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDhj9U4YXlzeKUSiPT6B4gNfPLSzLJcj0o",
  authDomain: "bookstore-app-b2cde.firebaseapp.com",
  databaseURL: "https://bookstore-app-b2cde-default-rtdb.firebaseio.com",
  projectId: "bookstore-app-b2cde",
  storageBucket: "bookstore-app-b2cde.appspot.com",
  messagingSenderId: "384601739869",
  appId: "1:384601739869:web:fa65c3397baa2035a433b4",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

const FirebaseContext = createContext(null);

//customHook
export const useFirebase = () => useContext(FirebaseContext)

//provider
export const FirebaseProvider = (props) => {
  const signupUserWithEmailAndPassword = (email, password) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const putData = (key, data) => {
    set(ref(database, key), data);
  };

  return (
    <FirebaseContext.Provider value={{ signupUserWithEmailAndPassword, putData }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
