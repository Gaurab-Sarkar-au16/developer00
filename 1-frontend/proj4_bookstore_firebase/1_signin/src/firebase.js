import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDhj9U4YXlzeKUSiPT6B4gNfPLSzLJcj0o",
  authDomain: "bookstore-app-b2cde.firebaseapp.com",
  projectId: "bookstore-app-b2cde",
  storageBucket: "bookstore-app-b2cde.appspot.com",
  messagingSenderId: "384601739869",
  appId: "1:384601739869:web:fa65c3397baa2035a433b4",
  databaseURL:
    "https://bookstore-app-b2cde-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);
