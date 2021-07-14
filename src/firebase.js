import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2hef5IhhlN1Ti9MWaMhq7jNwSAYESgvg",
  authDomain: "whatsapp-clone-71868.firebaseapp.com",
  projectId: "whatsapp-clone-71868",
  storageBucket: "whatsapp-clone-71868.appspot.com",
  messagingSenderId: "54480114906",
  appId: "1:54480114906:web:a85754d5231279c95141e3",
  measurementId: "G-0ZF6QW9ZF4",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
