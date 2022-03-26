let path = window. location. pathname;
let page = path. split("/"). pop().split(".").shift();

active = document.getElementById(page)
active.classList.add('active');
