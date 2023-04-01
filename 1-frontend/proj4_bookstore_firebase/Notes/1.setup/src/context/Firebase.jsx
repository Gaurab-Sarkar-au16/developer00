import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";

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

const firebaseApp = initializeApp(firebaseConfig)

export const FirebaseProvider = (props) => {
  return <FirebaseContext.Provider>{props.children}</FirebaseContext.Provider>;
};
