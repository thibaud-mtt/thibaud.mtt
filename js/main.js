const toggleMenuBtn = document.querySelector("#menu-toggler");
const toggleMenuImg = document.querySelector("#menu-toggler img");
const mainNavlist = document.querySelector("#main-navlist");
const menuLinks = document.querySelectorAll("#main-navlist a");

[toggleMenuBtn, ...menuLinks].forEach(element => element.addEventListener("click", toggleNav));


function toggleNav(){
  if(mainNavlist.classList.contains("hidden")) {
    mainNavlist.classList.remove("hidden");
    toggleMenuImg.setAttribute("src", "./images/hero/cross.svg");
    toggleMenuBtn.setAttribute("aria-expanded", "true");
  }
  else {
    mainNavlist.classList.add("hidden");
    toggleMenuImg.setAttribute("src", "./images/hero/menu.svg");
    toggleMenuBtn.setAttribute("aria-expanded", "false");
  }
}