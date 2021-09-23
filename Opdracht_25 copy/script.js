let hamMenu = document.querySelector(".btn-toggle-nav");
let sideBar = document.querySelector(".nav-sidebar ul");
let home = document.querySelector("#home");
let blue = document.querySelector("#blue");
let red = document.querySelector("#red");
let yellow = document.querySelector("#yellow");
let body = document.getElementsByTagName("body")[0];

const changeBackgroundHome = () => {
    body.classList.remove("blue");
    body.classList.remove("red");
    body.classList.remove("yellow");
    body.classList.add("background-color");
}

const changeBackgroundBlue = () => {
    body.classList.remove("background-color");
    body.classList.remove("red");
    body.classList.remove("yellow");
    body.classList.add("blue");
}

const changeBackgroundRed = () => {
    body.classList.remove("blue");
    body.classList.remove("background-color");
    body.classList.remove("yellow");
    body.classList.add("red");
}

const changeBackgroundYellow = () => {
    body.classList.remove("blue");
    body.classList.remove("red");
    body.classList.remove("background-color");
    body.classList.add("yellow");
}

hamMenu.addEventListener('click', () => {
    sideBar.classList.toggle('reveal');
})

home.addEventListener('click', changeBackgroundHome);
blue.addEventListener('click', changeBackgroundBlue);
red.addEventListener('click', changeBackgroundRed);
yellow.addEventListener('click', changeBackgroundYellow);



