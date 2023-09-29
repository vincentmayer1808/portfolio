import firebase from "firebase/compat/app";

import 'firebase/compat/firestore';
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB3AnRobb_mkceqpUlvZUxugCb08GgJTi4",
  authDomain: "portfolio-917be.firebaseapp.com",
  projectId: "portfolio-917be",
  storageBucket: "portfolio-917be.appspot.com",
  messagingSenderId: "533133772524",
  appId: "1:533133772524:web:42c9dae94eb0de25f147c9",
  measurementId: "G-ZSECFYN247"
};

const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
// const analytics = firebase.getAnalytics(app);

// console.log(analytics)