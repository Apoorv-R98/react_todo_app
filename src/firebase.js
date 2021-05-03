import firebase from "firebase";

const firebaseapp = firebase.initializeApp({
    apiKey: "AIzaSyC4Bh8j57vqygO5WMmd1xANBBB6fuEfSSQ",
    authDomain: "todo-app-ec7d0.firebaseapp.com",
    projectId: "todo-app-ec7d0",
    storageBucket: "todo-app-ec7d0.appspot.com",
    messagingSenderId: "435372992232",
    appId: "1:435372992232:web:3cc67806518f82a6b64b5d",
    measurementId: "G-TQNJ2G2SWT"
});

const db = firebaseapp.firestore();

export default db;