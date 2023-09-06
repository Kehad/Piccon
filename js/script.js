// FOR SELECTION
const navOpen = document.querySelector(".nav__container-open");
const navClose = document.querySelector(".nav__container-close3-right");
const unOrdered = document.querySelector(".nav__container-list-unordered");
const upload = document.querySelector(".header__container-upload--button");


navOpen.addEventListener("click", function (e) {
    e.preventDefault();
    console.log('NAv open')
    unOrdered.style.transform = "translateX(0%)";
    navClose.style.display = "block";
});

navClose.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("NAv close");
    unOrdered.style.transform = "translateX(-100%)";
    navClose.style.display = "none";  
});

upload.addEventListener("click", function (e) {
    e.preventDefault();

    var input = document.createElement("input");
    input.type = "file";
    input.click();
})