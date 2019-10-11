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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`user/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();
        // 如果没有就创建一个新的用户
        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
