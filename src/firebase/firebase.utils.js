import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDaSTAPHYNZ0FNzZptdAic-7LIjrUqcySY",
    authDomain: "afrodb-e28b5.firebaseapp.com",
    databaseURL: "https://afrodb-e28b5.firebaseio.com",
    projectId: "afrodb-e28b5",
    storageBucket: "afrodb-e28b5.appspot.com",
    messagingSenderId: "213037858426",
    appId: "1:213037858426:web:ca77f25797e048d5fa05c3",
    measurementId: "G-8GRSWLQDTT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;