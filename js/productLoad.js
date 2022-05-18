import { db, auth } from "./app";
import { onAuthStateChanged } from "firebase/auth";
import { getProduct } from "./getProduct";
import { getFirebaseCart, createFirebaseCart } from "./cart";
import { getMyLocalCart, addProductToCart, currencyFormat } from "./utils";

const productInfoSection = document.getElementById("productInfo");
const productAssetsSection = document.getElementById("productAssets");

let userLogged = undefined;
let cart = [];

function getParam(param) {
    const url = window.location.search;
    const searchParams = new URLSearchParams(url);
    const productId = searchParams.get(param);
    return productId;
}

async function loadProduct() {
    const productId = getParam("id"); // http://localhost:1234/product.html?id=TXQ9Wf1GIoAOJLkIEMYo&age=20

    const data = await getProduct(productId);

    const product = {
        ...data,
        id: productId, // docSnap.id,
    };

    renderProduct(product);
}

function renderProduct(product) {
    /*
    productAssetsSection.innerHTML = `
    <img class="product__mainImage" id="mainImage" src="${product.images[0]}">`;
    */

    const isProductAddedToCart = cart.some(
        (productCart) => productCart.id === product.id
    );

    const productButtonCart = isProductAddedToCart
        ? '<button class="product__cart" disabled>Producto añadido</button>'
        : '<button class="product__cart">Añadir al carrito</button>';

    productInfoSection.innerHTML = `
            <div class="product__image">
            <img src="${product.images[0]}"
                alt="" class="product__image--main" />
            <img src="${product.images[1]}"
                alt="" class="product__image--hover" />
        </div>

        <div class="product__info">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p class="product__price">${product.price}</p>
            ${productButtonCart}
        </div>
    `;

    const productCartButton = document.querySelector(".product__cart");
    productCartButton.addEventListener("click", (e) => {
        cart.push(product);

        addProductToCart(cart);

        if (userLogged) {
            createFirebaseCart(db, userLogged.uid, cart);
        }

        productCartButton.setAttribute("disabled", true);
        productCartButton.innerText = "Producto añadido";
    });
}

onAuthStateChanged(auth, async (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        userLogged = user;
        cart = await getFirebaseCart(db, userLogged.uid);
        console.log(cart);
        // ...
    } else {
        cart = getMyLocalCart();
        // User is signed out
        // ...
    }

    loadProduct();
});
