let toggle = document.querySelector(".toggle");
let body = document.querySelector("body");

toggle.addEventListener("click", function() {
    console.log("oui");
    body.classList.toggle('open')
});
