const myAlert = document.getElementById("mybutton");
const myBack = document.getElementById("mybutton2");
const body = document.getElementsByTagName("body")[0];
const changeBackground = () => {
    body.classList.toggle("red-background");
}

myAlert.addEventListener("click", function () { myAlert.textContent = "button clicked" });
myBack.addEventListener("click", changeBackground);


