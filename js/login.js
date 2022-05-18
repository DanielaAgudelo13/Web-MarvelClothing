import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { login } from "./auth";

const createUserForm = document.getElementById("createForm");

/*createUserForm.addEventListener("submit", async (e) => {
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
});*/

createUserForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = createUserForm.email.value;
    const password = createUserForm.password.value;

    login(auth, email, password);
});

onAuthStateChanged(auth, async (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        userLogged = user;
        document.querySelector(".login").innerHTML = `
        <button class="button-singOut">
                <span>Cerrar sesión de ${user.email}</span>
            </button>
        `;

        document
            .querySelector(".button-singOut")
            .addEventListener("click", () => {
                auth.signOut().then(() => {
                    location.reload();
                });
            });
        // ...
    }
});
