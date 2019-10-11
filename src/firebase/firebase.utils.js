import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyCDkx97n--vlkiazpbUJZA7blRSLPnwjxw",
    authDomain: "crwn-db-7bd66.firebaseapp.com",
    databaseURL: "https://crwn-db-7bd66.firebaseio.com",
    projectId: "crwn-db-7bd66",
    storageBucket: "crwn-db-7bd66.appspot.com",
    messagingSenderId: "742345885823",
    appId: "1:742345885823:web:58971fd8185363dcaad74a",
    measurementId: "G-C6EQWXGV42"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
