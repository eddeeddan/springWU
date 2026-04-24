let fadeLayer = document.querySelector(".fade-layer");
fadeLayer.addEventListener("click", showMenu);

let menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", showMenu);

function showMenu(){
    let menu = document.querySelector("#mobilenav");
    menu.classList.toggle("show");

    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("visible");
}