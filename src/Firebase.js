import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8giWQ8wjwobAdaQwhl2XBOmu9wUh2AxQ",
  authDomain: "artone-5d87e.firebaseapp.com",
  projectId: "artone-5d87e",
  storageBucket: "artone-5d87e.appspot.com",
  messagingSenderId: "1027590199746",
  appId: "1:1027590199746:web:448ab4ff093e49982d9e5b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
