import * as firebase from "firebase/app";
import 'firebase/firestore';
import "firebase/auth";

const app = firebase.initializeApp({

  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGEING_SENDER_ID,
  // appId:process.env.REACT_APP_FIREBASE_API_ID
  
    apiKey: "AIzaSyAmB1rnx-KDWPYleqHcTmU1I57-kZczrkA",
    authDomain:"react-endless.firebaseapp.com",
    databaseURL: "https://react-endless.firebaseio.com",
    projectId: "react-endless",
    storageBucket: "react-endless.appspot.com",
    messagingSenderId: 179755231748,
    appId:"1:179755231748:web:44d12bfe9196f209256351"

});

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const twitterProvider = new  firebase.auth.TwitterAuthProvider();
export const githubProvider = new  firebase.auth.GithubAuthProvider();
export const db =  firebase.firestore();

export default app;