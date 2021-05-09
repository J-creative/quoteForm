import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';

// Your web app's Firebase configuration 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCOrqqF9P8lyW6iaB7MhUQYoOO7NnoFc-o",
  authDomain: "manchester-menu.firebaseapp.com",
  projectId: "manchester-menu",
  storageBucket: "manchester-menu.appspot.com",
  messagingSenderId: "1093913921161",
  appId: "1:1093913921161:web:ecaf1748ea654492daa858",
  measurementId: "G-QTJLX0PFDT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore();

export default firebase;