import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCA-zJtQrfQbgjcHSYtba6q2SIXyRA4SXc",
  authDomain: "blogshog-74858.firebaseapp.com",
  projectId: "blogshog-74858",
  storageBucket: "blogshog-74858.appspot.com",
  messagingSenderId: "655868936463",
  appId: "1:655868936463:web:003d37e75b3db24e037e7a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };
