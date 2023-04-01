import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
//signup/signin
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  //user signed in or not
  onAuthStateChanged,
} from "firebase/auth";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyDsfxDCitDE-jolSdoECRqi6swHKcQsIhY",
  authDomain: "bookify-54746.firebaseapp.com",
  projectId: "bookify-54746",
  storageBucket: "bookify-54746.appspot.com",
  messagingSenderId: "1082765797863",
  appId: "1:1082765797863:web:789cebe4a518fb563fb542",
};

//custom hook
export const useFirebase = () => useContext(FirebaseContext);

//app
const firebaseApp = initializeApp(firebaseConfig);
//authentication/signin
const firebaseAuth = getAuth(firebaseApp);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

  //user signed in or not
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      // console.log("User", user);
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);
  const isLoggedIn = user ? true : false;
  //signup
  const signupUserWithEmailAndPassword = (email, password) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password);
  };
  //signin
  const signinUserWithEmailAndPassword = (email, password) => {
    signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  return (
    <FirebaseContext.Provider
      value={{ signupUserWithEmailAndPassword, signinUserWithEmailAndPassword, isLoggedIn, }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
