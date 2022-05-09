import { db, auth } from "./firebaseConfig";
import { createUser, addUserToDatabase } from "./auth";

const createUserForm = document.getElementById("createForm");

createUserForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = createUserForm.name.value;
    const email = createUserForm.email.value;
    const password = createUserForm.password.value;

    const userInfo = {
        name,
        email,
        password,
        isAdmin: false,
    };

    alert(userInfo.name);

    const newUser = await createUser(auth, userInfo);
    await addUserToDatabase(db, newUser.uid, userInfo);

    alert(`Bienvenido, ${name}`);
    // window.location.href = "/products.html";
});
