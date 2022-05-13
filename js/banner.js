const banner = document.querySelector(".banner").querySelector("img");
console.log(banner);

const image1 =
    "https://firebasestorage.googleapis.com/v0/b/marvelclothing-248ba.appspot.com/o/Banner%2FBannerStranger.jpg?alt=media&token=eb0801c1-12a9-463b-a006-1aa4202b147e";
const image2 =
    "https://firebasestorage.googleapis.com/v0/b/marvelclothing-248ba.appspot.com/o/Banner%2FImage2.jpg?alt=media&token=bf8bd6ae-5d81-4b31-a7bd-2f667b07c0a5";
const image3 =
    "https://firebasestorage.googleapis.com/v0/b/marvelclothing-248ba.appspot.com/o/Banner%2FImage3.jpg?alt=media&token=bb637551-ba3c-4153-92fe-86c47fbc664d";

let steps = 0;

const changeBanner = () => {
    switch (steps) {
        case 0:
            banner.src = image2;

            steps++;
            break;
        case 1:
            banner.src = image3;

            steps++;

            break;
        case 2:
            banner.src = image1;
            steps = 0;

            break;
    }
};

setInterval(changeBanner, 5000);

/*.addEventListener('click', (event) => {
    event.preventDefault();

    window.location.href = './'
})*/
