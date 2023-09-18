import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQMqI042CmAEOAStOmiHj7_69RCm_qnFI",
  authDomain: "linkedin-clone-d7680.firebaseapp.com",
  projectId: "linkedin-clone-d7680",
  storageBucket: "linkedin-clone-d7680.appspot.com",
  messagingSenderId: "147625874294",
  appId: "1:147625874294:web:72c3c6961de0a334cf6057",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();

export const auth = firebase.auth();
