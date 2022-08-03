// import firebase from "firebase/app";
// import "firebase/storage";
// import "firebase/firestore"

// const firebase = require("firebase/app");
// require("firebase/firestore");
// require("firebase/storage");

import  firebase  from 'firebase/app';
import 'firebase/firestore'
import 'firebase/storage'


// Your web app's Firebase configuration
firebase.initializeApp({
  apiKey: "AIzaSyDbBqa1gH-dhI4DZZpmLgrv4QmNzsc4T5M",
  authDomain: "unify-309723.firebaseapp.com",
  projectId: "unify-309723",
  storageBucket: "unify-309723.appspot.com",
  messagingSenderId: "842434201940",
  appId: "1:842434201940:web:ba8be18f2ea10c4a6d60c1",
  measurementId: "G-6NB77K63JP"
});


const storage = firebase.storage();

export { storage, firebase as default };





