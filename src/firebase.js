import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAE0SXFZ01OT4xh5bIoLAs2p0f6xSb6h9k",
  authDomain: "react-facebookclone.firebaseapp.com",
  projectId: "react-facebookclone",
  storageBucket: "react-facebookclone.appspot.com",
  messagingSenderId: "912522838802",
  appId: "1:912522838802:web:2618d423a62213004ce9cb",
  measurementId: "G-N2Y08QJGK0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
