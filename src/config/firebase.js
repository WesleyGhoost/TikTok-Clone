import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyAf-n8vy-YYjzkYaD98jylT3JL8uPSp_WA",
  authDomain: "tiktok-clone-41ed1.firebaseapp.com",
  projectId: "tiktok-clone-41ed1",
  storageBucket: "tiktok-clone-41ed1.appspot.com",
  messagingSenderId: "1032176318956",
  appId: "1:1032176318956:web:fc6847b6694cd48ccfe8c9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db