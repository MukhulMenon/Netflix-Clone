import firebase from "firebase";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBMaYwT0IdAa_wKNv0NJddrgX2PR4N9o2c",
  authDomain: "netflix-clone-uno.firebaseapp.com",
  projectId: "netflix-clone-uno",
  storageBucket: "netflix-clone-uno.appspot.com",
  messagingSenderId: "837941272050",
  appId: "1:837941272050:web:af95361bf16fe8c8525f6b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
