// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDVRBLWBJTmsl3envW-dQ3zQQp8qa5Mnok",
        authDomain: "todo-app-473f9.firebaseapp.com",
        projectId: "todo-app-473f9",
        storageBucket: "todo-app-473f9.appspot.com",
        messagingSenderId: "406660404745",
        appId: "1:406660404745:web:bb9364cfc92d0a666b4ad8",
        measurementId: "G-GJMR0S3QX0"
});
const db = firebase.firestore();
const auth = firebase.auth();

export default db;