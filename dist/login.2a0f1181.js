var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},t=e.parcelRequire5220;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){r[e]=n},e.parcelRequire5220=t);var o=t("6Uh31"),l=t("kxgSl");const i=document.getElementById("createForm");i.addEventListener("submit",(e=>{e.preventDefault();const n=i.email.value,r=i.password.value;l.login(o.auth,n,r)}));
//# sourceMappingURL=login.2a0f1181.js.map