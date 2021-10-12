const listRef = document.querySelector("#brand-list");
const navLinkRef = document.querySelector("#brands");
// const navLinkElement = document.querySelector("#brands");
const listElement = document.getElementById("brand-list");

const brandList = [
  "ANNAKIKI",
  "ANNE WEST",
  "BACON CLOTHING",
  "BLACK CROWS",
  "BLANCHA",
  "CANCELLATO",
  "CORDOVA",
  "FUSALP",
  "I LOVE MR MITTENS",
  "IENKI IENKI",
  "LE KILT",
  "LINGUA FRANCA",
  "MORPHO AND LUNA",
  "NASTAHA ZINKO",
  "PERFECT MOMENT",
  "SPENCER VLADIMIR",
  "STAND",
  "WILD AND WOOLLY",
  "WOOLY BOOLY",
  "BLACK CROWS",
];

const addMarkup = (list) => {
  return list.reduce((acc, item) => {
    return (acc += `<li class="brand-list__item"><a class="brand-list__link" href="#">${item}</a></li>`);
  }, "");
};

const showBrandList = () => {
  listElement.classList.remove("visually-hidden");
  listElement.innerHTML = addMarkup(brandList);
};

navLinkRef.addEventListener("mouseover", () => showBrandList());
navLinkRef.addEventListener("mouseleave", () => {
  listElement.classList.add("visually-hidden");
  listElement.innerHTML = "";
});
