const divs = document.querySelectorAll('div');
const h1 = document.querySelector('h1');
const btn = document.querySelector('button');

let count = 0;

function makeRandomColor() {

    if (this.clicked === true) {
        return;
    }

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const randomColor = "rgb(" + r + "," + g + "," + b + ")";

    // color 
    this.style.backgroundColor = randomColor;
   

    if (this.clicked !== true) {
        this.clicked = true;
        count++;
    }

    // btn update
    btn.innerHTML = "box counter : " + count;

    this.clicked = true;
}

for (let index = 0; index < divs.length; index++) {
    divs[index].addEventListener("click", makeRandomColor);
}