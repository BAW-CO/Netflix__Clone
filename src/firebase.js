import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, 
    signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-FUfUDocPIMCp48xVZruFTp8Lh-5AxJU",
  authDomain: "netflix-clone-bawco.firebaseapp.com",
  projectId: "netflix-clone-bawco",
  storageBucket: "netflix-clone-bawco.firebasestorage.app",
  messagingSenderId: "738394651632",
  appId: "1:738394651632:web:81908e1b9fa6fa26c33b35",
  measurementId: "G-97PWWF9LSB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("User logged in:", userCredential.user);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
};


const logout = () => {
    signOut(auth);
}

export { auth, db, signup, login, logout };