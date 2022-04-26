import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth/";

import { auth, db } from "./firebaseConfig";

export const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};
