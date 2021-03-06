import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

async function createUser(auth, { email, password }) {
    try {
        const { user } = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        return user;
    } catch (e) {
        if (e.code === "auth/weak-password") {
            alert("Tu contraseña debe tener al menos 6 caracteres");
        }

        if (e.code === "auth/email-already-in-use") {
            alert("Este correo ya se encuentra en uso");
        }
    }
}

async function login(auth, email, password) {
    try {
        const { user } = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        alert(`Bienvenido, usuario ${user.email}`);

        validateAdmin(user.uid);
    } catch (e) {
        alert("Correo o contraseña inválida :(");
    }
}

async function addUserToDatabase(db, userId, userInfo = {}) {
    try {
        await setDoc(doc(db, "users", userId), userInfo);
    } catch (e) {
        console.log(e);
    }
}

async function validateAdmin(id) {
    const docRef = doc(db, "users", id);
    try {
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();
        const isAdmin = data.isAdmin;

        if (isAdmin) {
            window.location.href = "/createProduct.html";
        } else {
            window.location.href = "/shop.html";
        }
    } catch (e) {
        console.log(e);
    }
}

export { createUser, login, addUserToDatabase };
