let COUNT = 0;


function positiveDisplay() {
    const counter = document.querySelector(".next")
    COUNT++;
    counter.innerHTML = COUNT;
    const img = document.querySelector(".season-pictiure")
    if (COUNT === 1) {
        img.setAttribute("src", "./imgs/1.png")
    }
    if (COUNT === 2) {
        img.setAttribute("src", "./imgs/2.png") 
    }
    if (COUNT === 3) {
        img.setAttribute("src", "./imgs/3.png")
    }
    if (COUNT === 4) {
        img.setAttribute("src", "./imgs/4.png")
    }
    if (COUNT === 5) {
        img.setAttribute("src", "./imgs/5.png")
    }

}


function negativeDisplay() {
    const counter = document.querySelector("#prev")
    COUNT--;
    counter.innerHTML = COUNT;
    const img = document.querySelector("img")
    if (COUNT === 1) {
        img.setAttribute("src", "./imgs/1.png")
    }
    if (COUNT === 2) {
        img.setAttribute("src", "./imgs/2.png")
    }
    if (COUNT === 3) {
        img.setAttribute("src", "./imgs/3.png")
    }
    if (COUNT === 4) {
        img.setAttribute("src", "./imgs/4.png")
    }
    if (COUNT === 5) {
        img.setAttribute("src", "./imgs/5.png")
    }
}   