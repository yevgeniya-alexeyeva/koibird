window.onscroll = function () {
  resizeHeader();
};

const header = document.getElementById("header");
const search = document.getElementById("search");
const logo = document.getElementById("logo");
const accountBlock = document.getElementById("account-block");

const sticky = header.offsetTop;

function resizeHeader() {
  if (window.pageYOffset > sticky) {
    search.classList.add("visually-hidden");
    accountBlock.classList.add("visually-hidden");
    logo.setAttribute("style", "width: 175px; height: 30px");
    header.setAttribute("style", "height: 93px; padding: 17px;");
  } else {
    search.classList.remove("visually-hidden");
    accountBlock.classList.remove("visually-hidden");
    logo.removeAttribute("style");
    header.removeAttribute("style");
  }
}
