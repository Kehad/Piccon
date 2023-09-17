// FOR SELECTION
const navOpen = document.querySelector(".nav__container-open");
const navClose = document.querySelector(".nav__container-close3-right");
const unOrdered = document.querySelector(".nav__container-list-unordered");
const upload = document.querySelector(".header__container-upload--button");
const main = document.querySelector(".main");

const waitlist = document.querySelector('.waitlist');
const openWaitlist = document.querySelector(".button-type1");
const closeWaitlist = document.querySelector(".waitlist__container---close");
const navButtons = document.querySelectorAll('.link-close')


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

openWaitlist.addEventListener("click", function (e) {
    e.preventDefault();
    console.log('open waitlist');
    console.log(waitlist)
    waitlist.style.display = "block";
    main.classList.add("backdrop");
});

closeWaitlist.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("open waitlist");
  console.log(waitlist);
  waitlist.style.display = "none";
  main.classList.remove("backdrop");
  
});

navButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();

    unOrdered.style.transform = "translateX(-100%)";
    navClose.style.display = "none";  

  });
})
