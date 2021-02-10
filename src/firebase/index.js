import firebase from "firebase/app";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAjVeVokR0YhCk6FFct3PTPvLYVU5l-G5Y",
  authDomain: "unify-aaba7.firebaseapp.com",
  databaseURL: "https://unify-aaba7.firebaseio.com",
  projectId: "unify-aaba7",
  storageBucket: "unify-aaba7.appspot.com",
  messagingSenderId: "937241784781",
  appId: "1:937241784781:web:b35202cfc9f9a7f3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
