function backgroundImgRandom() {

    const randomNumber = Math.floor(Math.random() * 5);

    if (randomNumber === 0) {
        document.body.style.background = "url(./imgs/1.jpg)";
    }

    if (randomNumber === 1) {
        document.body.style.background = "url(./imgs/2.jpg)";
    }

    if (randomNumber === 2) {
        document.body.style.background = "url(./imgs/3.jpg)";
    }

    if (randomNumber === 3) {
        document.body.style.background = "url(./imgs/4.jpg)";
    }
}