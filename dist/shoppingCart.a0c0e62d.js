var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequire5220;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequire5220=r);var a=r("6QD2Y"),o=r("1tHc5"),i=r("hAAYD"),d=r("LMLC2");d=r("LMLC2");const c=document.querySelector(".cartList"),s=document.getElementById("total");let l=[];function u(e){let t=0;c.innerHTML="",e.forEach((e=>{!function(e){const t=document.createElement("div");t.className="card__product",t.innerHTML=`\n    <div class="card__product__info">\n        <img class="card__product__info__img" src="${e.images[0]}" />\n        <p class="card__product__info__text">${e.description}</p>\n    </div>\n    <div class="card__product__quantity">\n        <p>1</p>\n        </div>\n        <div class="card__product__price">\n        <p>${e.price}</p>\n    </div>\n    <div class="card__product__erase">\n        <img src="https://firebasestorage.googleapis.com/v0/b/marvelclothing-248ba.appspot.com/o/Banner%2FtrashCan.svg?alt=media&token=4909bb66-8560-41ad-ac12-b77cf7875820" alt="trashCan.svg">\n    </div>\n    `,c.appendChild(t),t.addEventListener("click",(t=>{"BUTTON"===t.target.tagName&&(console.log("remove it!"),async function(e){const t=l.filter((t=>t.id!==e));l=t,userLogged&&await i.createFirebaseCart(a.db,userLogged.uid,t);d.addProductToCart(t),c.innerHTML="",u(t)}(e.id))}))}(e),t+=parseInt(e.price)})),s.innerText=d.currencyFormat(t)}o.onAuthStateChanged(a.auth,(async e=>{e?(userLogged=e,l=await i.getFirebaseCart(a.db,userLogged.uid)):l=d.getMyLocalCart(),u(l)}));
//# sourceMappingURL=shoppingCart.a0c0e62d.js.map
