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

//firestore database
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
//bucket
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

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
//firestore db
const fireStore = getFirestore(firebaseApp);
//bucket
const storage = getStorage(firebaseApp);

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

  // console.log(user);
  //add book
  const handleCreateNewListing = async (name, isbn, price, cover) => {
    //image
    const imageRef = ref(storage, `uploads/images/${Date.now()}-${cover.name}`);
    const uploadResult = await uploadBytes(imageRef, cover);
    //add to firestore

    return await addDoc(collection(fireStore, "books"), {
      name,
      isbn,
      price,
      imageURL: uploadResult.ref.fullPath,
      userID: user.uid,
      userEmail: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    });
  };

  //read books
  const listAllBooks = () => {
    return getDocs(collection(fireStore, "books"));
  };

  //getImageURL
  const getImageURL = (path) => {
    return getDownloadURL(ref(storage, path));
  };

  //getDetails
  const getBookById = async (id) => {
    const docRef = doc(fireStore, "books", id);
    const result = await getDoc(docRef);
    return result;
  };

  return (
    <FirebaseContext.Provider
      value={{
        signupUserWithEmailAndPassword,
        signinUserWithEmailAndPassword,
        handleCreateNewListing,
        listAllBooks,
        getImageURL,
        getBookById,
        isLoggedIn,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
