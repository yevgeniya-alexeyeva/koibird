const elements = {
  menuBtn: document.getElementById("menu-button"),
  closeBtn: document.getElementById("close-button"),
  row: document.getElementById("row"),
  nav: document.getElementById("nav"),
  overlay: document.getElementById("overlay"),
};

const refs = {
  menuBtn: document.querySelector(".menu-button"),
  closeBtn: document.querySelector(".close-button"),
};

const mql = window.matchMedia("(max-width: 767px)");
switchMenu();
mql.onchange = () => {
  switchMenu();
};

function switchMenu() {
  if (elements.closeBtn.classList.contains("visually-hidden") && mql.matches) {
    elements.row.classList.add("visually-hidden");
    elements.nav.classList.add("visually-hidden");
  } else {
    elements.row.classList.remove("visually-hidden");
    elements.nav.classList.remove("visually-hidden");
  }
}

const showMenu = () => {
  elements.menuBtn.classList.add("visually-hidden");
  elements.closeBtn.classList.remove("visually-hidden");
  elements.row.classList.remove("visually-hidden");
  elements.nav.classList.remove("visually-hidden");
  elements.overlay.classList.remove("visually-hidden");
};

const hideMenu = () => {
  elements.menuBtn.classList.remove("visually-hidden");
  elements.closeBtn.classList.add("visually-hidden");
  elements.row.classList.add("visually-hidden");
  elements.nav.classList.add("visually-hidden");
  elements.overlay.classList.add("visually-hidden");
};

refs.menuBtn.addEventListener("click", showMenu);
refs.closeBtn.addEventListener("click", hideMenu);
