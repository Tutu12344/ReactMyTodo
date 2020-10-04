import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyCICrtqbNYZiVvvu-AalmBFrmHVLfjkY-8",
  authDomain: "mytodo-6d511.firebaseapp.com",
  databaseURL: "https://mytodo-6d511.firebaseio.com",
  projectId: "mytodo-6d511",
  storageBucket: "mytodo-6d511.appspot.com",
  messagingSenderId: "459202504467",
  appId: "1:459202504467:web:575a76a7bbace533b6dce6",
  measurementId: "G-ZVMJDEJG4S",
});

const auth = firebase.auth();
const db = firebase.firestore();
// db.settings({ timestampsInSnapshots: true });

export { auth, db };
