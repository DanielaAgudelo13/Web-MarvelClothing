import { db, auth } from "./app";
import { onAuthStateChanged } from "firebase/auth";
import { getProducts } from "./products";
import { createFirebaseCart, getFirebaseCart } from "./cart";
import { addProductToCart, getMyLocalCart, currencyFormat } from "./utils";

const productSection = document.querySelector(".product");
const categoryFilter = document.getElementById("category");
const orderFilter = document.getElementById("order");

console.log(productSection);

let userLogged = undefined;
let products = [];
let cart = [];

async function loadProducts() {
    const firebaseProducts = await getProducts(db);
    productSection.innerHTML = "";
    firebaseProducts.forEach((product) => {
        renderProduct(product);
    });

    products = firebaseProducts;
}

function renderProduct(item) {
    const product = document.createElement("a");
    product.className = "product__item";

    product.setAttribute("href", `./product.html?id=${item.id}`);

    const coverImage = item.images
        ? item.images[0]
        : "https://cdn1.iconfinder.com/data/icons/business-company-1/500/image-512.png";

    const secondaryImage = item.images[1];

    const isProductAddedToCart = cart.some(
        (productCart) => productCart.id === item.id
    );

    const productButtonCart = isProductAddedToCart
        ? '<button class="product__cart" disabled>Producto añadido</button>'
        : '<button class="product__cart">Añadir al carrito</button>';

    product.innerHTML = `
    
        <div class="product__image">
            <img src="${coverImage}"
                alt="" class="product__image--main" />
            <img src="${secondaryImage}"
                alt="" class="product__image--hover" />
        </div>

        <div class="product__info">
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <p class="product__price">${item.price}</p>
            ${productButtonCart}
        </div>
    
    `;

    productSection.appendChild(product);

    const productCartButton = product.querySelector(".product__cart");

    productCartButton.addEventListener("click", async (e) => {
        e.preventDefault(); // evitar que al dar click en el boton, funcione el enlace del padre.

        cart.push(item);
        addProductToCart(cart);

        if (userLogged) {
            await createFirebaseCart(db, userLogged.uid, cart);
        }

        productCartButton.setAttribute("disabled", true);
        productCartButton.innerText = "Producto añadido";
    });
}

function filterBy() {
    const newCategory = categoryFilter.value;
    const newOrder = orderFilter.value;

    let filteredProducts = [];

    if (newCategory !== "") {
        filteredProducts = products.filter(
            (product) => product.category === newCategory
        );
    } else {
        filteredProducts = products;
    }

    if (newOrder === "asc") {
        filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
    }

    if (newOrder === "desc") {
        filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
    }

    productSection.innerHTML = "";
    filteredProducts.forEach((product) => {
        renderProduct(product);
    });
}

categoryFilter.addEventListener("change", (e) => {
    filterBy();
});

orderFilter.addEventListener("change", (e) => {
    filterBy();
});

onAuthStateChanged(auth, async (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        userLogged = user;
        cart = await getFirebaseCart(db, userLogged.uid);
        // ...
    } else {
        cart = getMyLocalCart();
        // User is signed out
        // ...
    }

    loadProducts();
});
