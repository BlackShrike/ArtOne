import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8giWQ8wjwobAdaQwhl2XBOmu9wUh2AxQ",
  authDomain: "artone-5d87e.firebaseapp.com",
  projectId: "artone-5d87e",
  storageBucket: "artone-5d87e.appspot.com",
  messagingSenderId: "1027590199746",
  appId: "1:1027590199746:web:448ab4ff093e49982d9e5b",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
