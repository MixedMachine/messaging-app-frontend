import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore

const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_FIREBASE_APIKEY}`,
    authDomain: `${process.env.REACT_APP_FIREBASE_AUTHDOMAIN}`,
    projectId: `${process.env.REACT_APP_FIREBASE_PROJECTID}`,
    storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGEBUCKET}`,
    messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID}`,
    appId: `${process.env.REACT_APP_FIREBASE_APPID}`
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db