let btn = document.querySelector("nav .container .links button")
list = document.querySelector("nav .container .links button + ul");

btn.onclick = function() {
list.classList.toggle("active")
}