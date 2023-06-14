import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAe2zwEzhUjiGTtIbe5YIJw5VIHJfMkPys",
  authDomain: "my-scentshop-project.firebaseapp.com",
  projectId: "my-scentshop-project",
  storageBucket: "my-scentshop-project.appspot.com",
  messagingSenderId: "85928250547",
  appId: "1:85928250547:web:4103a6e49d8a86c34474c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;