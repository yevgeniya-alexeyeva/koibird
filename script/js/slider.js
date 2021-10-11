const newIn = document.querySelector(".new-in");
const bestSellers = document.querySelector(".best-sellers");

const newInProducts = [
  {
    productImgURL1x: "./images/new-in-1.png",
    productImgURL2x: "./images/new-in-1@2x.png",
    name: "BLACK JACKET",
    brand: "Gucci",
    price: "000",
  },
  {
    productImgURL1x: "./images/new-in-2.png",
    productImgURL2x: "./images/new-in-2@2x.png",
    name: "WHITE JACKET",
    brand: "Bacon Clothing",
    price: "000",
  },
  {
    productImgURL1x: "./images/new-in-3.png",
    productImgURL2x: "./images/new-in-3@2x.png",
    name: "YELLOW JACKET",
    brand: "Annakiki",
    price: "000",
  },
  {
    productImgURL1x: "./images/new-in-4.png",
    productImgURL2x: "./images/new-in-4@2x.png",
    name: "CAMOUFLAGE JACKET",
    brand: "Black Crows",
    price: "000",
  },
];

const bestSellersProducts = [
  {
    productImgURL1x: "./images/best-sell-1.png",
    productImgURL2x: "./images/best-sell-1@2x.png",
    name: "PINK JACKET",
    brand: "Gucci",
    price: "000",
  },
  {
    productImgURL1x: "./images/best-sell-2.png",
    productImgURL2x: "./images/best-sell-2@2x.png",
    name: "PINK KNIT BEANIE",
    brand: "Bacon Clothing",
    price: "000",
  },
  {
    productImgURL1x: "./images/best-sell-3.png",
    productImgURL2x: "./images/best-sell-3@2x.png",
    name: "GOLD GLOVES",
    brand: "Annakiki",
    price: "000",
  },
  {
    productImgURL1x: "./images/best-sell-4.png",
    productImgURL2x: "./images/best-sell-4@2x.png",
    name: "CREAM HANDBAG",
    brand: "Black Crows",
    price: "000",
  },
];

const createCard = (items, sectionName, title) => {
  const list = items.reduce((acc, item) => {
    return (acc += `<li>
        <div class="product">
        <img class="product__image" srcset="${item.productImgURL1x} 1x, ${item.productImgURL2x} 2x" src="./${item.productImgURL1x}" alt="${item.name}"/>
        <button class="wish-btn" type="button"></button>
        <a class="product__descr-wrapper" href="#">
            <p class="product__name">
                ${item.name}
            </p>
            <p class="product__brand">
                ${item.brand}
            </p>
            <p class="product__price">
            &#163;${item.price}
            </p>
            <p class="product__plea" href="">
                shop now
            </p>
            <div class="product__underline"></div>
        </a>
    </div>
</li>`);
  }, "");

  return `<div class="title">
      <div class="title__line"></div>
      <h2 class="title__text">${title}</h2>
    </div>
    <div class="${sectionName}__wrapper">
      <button class="${sectionName}__btn-prev btn-prev"></button>
      <ul class="${sectionName}__slider">${list}</ul>
      <button class="${sectionName}__btn-next btn-next"></button>
    </div>`;
};

newIn.insertAdjacentHTML(
  "beforeend",
  createCard(newInProducts, "new-in", "new in")
);
bestSellers.insertAdjacentHTML(
  "beforeend",
  createCard(bestSellersProducts, "best-sellers", "best sellers")
);
