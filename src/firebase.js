import firebase from "firebase";

// connect firebase with the react front end

const firebaseConfig = {
    apiKey: "AIzaSyCgZ3xl6lolYabAMXjuDYH_JKzE2EuiW3w",
    authDomain: "clone-9d9a8.firebaseapp.com",
    databaseURL: "https://clone-9d9a8.firebaseio.com",
    projectId: "clone-9d9a8",
    storageBucket: "clone-9d9a8.appspot.com",
    messagingSenderId: "977615618425",
    appId: "1:977615618425:web:190bdd80058364f83cefa8",
    measurementId: "G-FL3J8DY985"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
