import { auth, db } from "./app";
import { onAuthStateChanged } from "firebase/auth";
import { getFirebaseCart, createFirebaseCart } from "./cart";
import { addProductToCart } from "./utils";
import { getMyLocalCart, currencyFormat } from "./utils";

const cartSection = document.querySelector(".cartList");
const totalSection = document.getElementById("total");
let cart = [];

function loadCart(cart) {
    let total = 0;
    cartSection.innerHTML = "";
    cart.forEach((product) => {
        renderProduct(product);
        total += parseInt(product.price);
    });

    totalSection.innerText = currencyFormat(total);
}

async function removeProduct(productId) {
    const newCart = cart.filter((product) => product.id !== productId);

    cart = newCart;

    if (userLogged) {
        await createFirebaseCart(db, userLogged.uid, newCart);
    }

    addProductToCart(newCart);

    cartSection.innerHTML = "";

    loadCart(newCart);
}

function renderProduct(product) {
    const productCart = document.createElement("div");
    productCart.className = "card__product";
    productCart.innerHTML = `
    <div class="card__product__info">
        <img class="card__product__info__img" src="${product.images[0]}" />
        <p class="card__product__info__text">${product.description}</p>
    </div>
    <div class="card__product__quantity">
        <p>1</p>
        </div>
        <div class="card__product__price">
        <p>${product.price}</p>
    </div>
    <div class="card__product__erase hand">
        <img id="delete_product"  src="https://firebasestorage.googleapis.com/v0/b/marvelclothing-248ba.appspot.com/o/Banner%2FtrashCan.svg?alt=media&token=4909bb66-8560-41ad-ac12-b77cf7875820" alt="trashCan.svg">
    </div>
    `;

    cartSection.appendChild(productCart);

    productCart.addEventListener("click", (e) => {
        if (e.target.id === "delete_product") {
            console.log("remove it!");
            removeProduct(product.id);
        }
    });
}

onAuthStateChanged(auth, async (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        userLogged = user;
        cart = await getFirebaseCart(db, userLogged.uid);
        loadCart(cart);
    } else {
        //cart = getMyLocalCart();
        // User is signed out
        // ...
    }
});
