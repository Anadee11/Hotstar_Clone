// import firebase from './firebase';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"; 
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDVswZHb9-c0SGyQgDthlNTrcCH-LfWZn8",
    authDomain: "disney-clone-47eda.firebaseapp.com",
    projectId: "disney-clone-47eda",
    storageBucket: "disney-clone-47eda.appspot.com",
    messagingSenderId: "421538585574",
    appId: "1:421538585574:web:57f722d7482375fa801427",
    measurementId: "G-611ET4SPFZ"
  };


  const firebaseApp = initializeApp(firebaseConfig);
 const db = getFirestore(firebaseApp);
 const auth = getAuth(firebaseApp);
 const provider = new firebase.auth.GoogleAuthProvider();
 const storage = getStorage(firebaseApp);

 export { auth, provider, storage };
 export default db;