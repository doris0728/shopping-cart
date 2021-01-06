import firebase from 'firebase/app'
import 'firebase/analytics'
import "firebase/firestore";
import 'firebase/auth'
// import * as firebase from "firebase";
// import "firebase/firestore";

// import 'firebase/firestore';
// const firebase = require('firebase')
const firebaseConfig = {
  apiKey: "AIzaSyB79zZF0tr6Ddr9Qtz0aNaeCm2rb9_wCE8",
  authDomain: "shopping-cart-a27c2.firebaseapp.com",
  projectId: "shopping-cart-a27c2",
  storageBucket: "shopping-cart-a27c2.appspot.com",
  messagingSenderId: "1023011952091",
  appId: "1:1023011952091:web:e6e80ce29b8e32d33a03fe"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const firebaseAuth = firebase.auth();
export const db = firebase.firestore();
