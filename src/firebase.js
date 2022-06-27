import firebase from "firebase";
import firebase from "firebase/compat/app";
const firebaseConfig = {
  apiKey: "AIzaSyDjwCVFqQQx37w3RQPC76G4qRSEjAVRbuE",
  authDomain: "directory-14182.firebaseapp.com",
  databaseURL:
    "https://directory-14182-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "directory-14182",
  storageBucket: "directory-14182.appspot.com",
  messagingSenderId: "815303583013",
  appId: "1:815303583013:web:d393c63101281d773026cc",
  measurementId: "G-05SLYTRVF7",
};
const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database.ref();
