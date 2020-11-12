import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDz-iWRIw-pTBcRPffha6rtZIfCeRPzIhs",
  authDomain: "discord-clone-4ce33.firebaseapp.com",
  databaseURL: "https://discord-clone-4ce33.firebaseio.com",
  projectId: "discord-clone-4ce33",
  storageBucket: "discord-clone-4ce33.appspot.com",
  messagingSenderId: "851063479353",
  appId: "1:851063479353:web:8d0f00aaeb5d58a69d81e8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
