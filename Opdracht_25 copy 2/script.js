let hamMenu = document.querySelector(".btn-toggle-nav");
let sideBar = document.querySelector(".nav-sidebar");
let home = document.querySelector("#home");
let blue = document.querySelector("#blue");
let red = document.querySelector("#red");
let yellow = document.querySelector("#yellow");

hamMenu.addEventListener('click', () => {
    sideBar.classList.toggle("active");
})

   home.addEventListener('click', () => {
    document.body.style.backgroundColor = "burlywood";
    sideBar.classList.toggle("active");
})

blue.addEventListener('click', () => {
    document.body.style.backgroundColor = "cornflowerblue";
    sideBar.classList.toggle("active");
})

red.addEventListener('click', () => {
    document.body.style.backgroundColor = "red";
    sideBar.classList.toggle("active");
})

yellow.addEventListener('click', () => {
    document.body.style.backgroundColor = "yellow";
    sideBar.classList.toggle("active");
})