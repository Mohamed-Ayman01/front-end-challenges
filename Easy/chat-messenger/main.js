let aside = document.querySelector("aside");
let menuBtn = document.querySelector("main .person .menu");
let exitMenuBtn = document.querySelector("aside .menu");

menuBtn.addEventListener("click", function () {
  aside.classList.add("active")
});

exitMenuBtn.addEventListener("click", function () {
  aside.classList.remove("active")
});