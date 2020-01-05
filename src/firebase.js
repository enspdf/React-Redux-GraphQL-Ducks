import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

let firebaseConfig = {
  apiKey: "AIzaSyC8kMOTf5WTNsbeANZm0bz7MaezuUmcjYk",
  authDomain: "fir-auth-e5fd7.firebaseapp.com",
  databaseURL: "https://fir-auth-e5fd7.firebaseio.com",
  projectId: "fir-auth-e5fd7",
  storageBucket: "fir-auth-e5fd7.appspot.com",
  messagingSenderId: "568152564285",
  appId: "1:568152564285:web:023fd92760a2512ec0c054",
  measurementId: "G-C033MFDERK"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore().collection("favs");

export function getFavs(uid) {
  return db
    .doc(uid)
    .get()
    .then(snap => {
      return snap.data().array;
    });
}

export function updateDB(array, uid) {
  return db.doc(uid).set({ array });
}

export function signOutGoogle() {
  firebase.auth().signOut();
}

export function loginWithGoogle() {
  let provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then(snap => snap.user);
}
