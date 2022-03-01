const banner = document.querySelector(".banner").querySelector("img");
console.log(banner);

const image1 = "./data/images/BannerStranger.jpg";
const image2 = "./data/images/Image2.jpg";
const image3 = "./data/images/Image3.jpg";

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
