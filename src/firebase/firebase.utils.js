import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyClMpdGLR18Ky_N0SFCBSspR8Dbug3WM2k",
  authDomain: "eshop-13579.firebaseapp.com",
  projectId: "eshop-13579",
  storageBucket: "eshop-13579.appspot.com",
  messagingSenderId: "931440706130",
  appId: "1:931440706130:web:4939748fa5b8270190d58b",
  measurementId: "G-KQ91R5GZJX",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
