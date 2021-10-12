const slideRefs = {
  newIn: document.querySelector(".new-in"),
  bestSellers: document.querySelector(".best-sellers"),
};

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

let newInFirstSlide = 0;
let bestSellFirstSlide = 0;
let newInAmount = 4;
let bestSellAmount = 4;

const tablet = window.matchMedia("(max-width: 1199px) and (min-width: 767px)");
const mobile = window.matchMedia("(max-width: 768px)");
const laptop = window.matchMedia("(min-width: 1200px)");

const createCard = (items, sectionName, title) => {
  const slides =
    sectionName === "new-in"
      ? items.slice(newInFirstSlide, newInFirstSlide + newInAmount)
      : items.slice(bestSellFirstSlide, bestSellFirstSlide + bestSellAmount);
  const list = slides.reduce((acc, item) => {
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

const fillSliders = (num) => {
  newInAmount = num;
  bestSellAmount = num;
  slideRefs.newIn.innerHTML = createCard(newInProducts, "new-in", "new in");
  slideRefs.bestSellers.innerHTML = createCard(
    bestSellersProducts,
    "best-sellers",
    "best sellers"
  );
};

(function showSliders() {
  if (mobile.matches) {
    newInFirstSlide = 0;
    bestSellFirstSlide = 0;
    fillSliders(1);
  } else if (tablet.matches) {
    newInFirstSlide = 0;
    bestSellFirstSlide = 0;
    fillSliders(3);
  } else if (laptop.matches) {
    newInFirstSlide = 0;
    bestSellFirstSlide = 0;
    fillSliders(4);
  }
})();

mobile.onchange = () => {
  if (mobile.matches) {
    newInFirstSlide = 0;
    bestSellFirstSlide = 0;
    fillSliders(1);
  }
};

tablet.onchange = () => {
  if (tablet.matches) {
    newInFirstSlide = 0;
    bestSellFirstSlide = 0;
    fillSliders(3);
  }
};

laptop.onchange = () => {
  if (laptop.matches) {
    newInFirstSlide = 0;
    bestSellFirstSlide = 0;
    fillSliders(4);
  }
};

//list new

const listNewLeft = (e) => {
  if (e.target.classList.value === "new-in__btn-prev btn-prev") {
    if (laptop.matches) return;
    if (tablet.matches && newInFirstSlide > 0) {
      newInFirstSlide--;
      fillSliders(3);
      return;
    }

    if (mobile.matches && newInFirstSlide > 0) {
      newInFirstSlide--;
      fillSliders(1);
      return;
    }
  }
};

const listNewRight = (e) => {
  if (e.target.classList.value === "new-in__btn-next btn-next") {
    if (laptop.matches) return;
    if (tablet.matches && newInFirstSlide === 0) {
      newInFirstSlide++;
      fillSliders(3);
      return;
    }
    if (mobile.matches && newInFirstSlide < 3) {
      newInFirstSlide++;
      fillSliders(1);
      return;
    }
  }
};

//list best
const listBestLeft = (e) => {
  if (e.target.classList.value === "best-sellers__btn-prev btn-prev") {
    if (laptop.matches) return;
    if (tablet.matches && bestSellFirstSlide > 0) {
      bestSellFirstSlide--;
      fillSliders(3);
      return;
    }

    if (mobile.matches && bestSellFirstSlide > 0) {
      bestSellFirstSlide--;
      fillSliders(1);
      console.log(
        "🚀 ~ file: slider.js ~ line 176 ~ listNewLeft ~ newInFirstSlide",
        bestSellFirstSlide
      );
      console.log(mobile.matches);
      return;
    }
  }
};

const listBestRight = (e) => {
  if (e.target.classList.value === "best-sellers__btn-next btn-next") {
    if (laptop.matches) return;
    if (tablet.matches && bestSellFirstSlide === 0) {
      bestSellFirstSlide++;
      fillSliders(3);
      return;
    }
    if (mobile.matches && bestSellFirstSlide < 3) {
      bestSellFirstSlide++;
      fillSliders(1);
      return;
    }
  }
};

slideRefs.newIn.addEventListener("click", (e) => listNewLeft(e));
slideRefs.newIn.addEventListener("click", (e) => listNewRight(e));
slideRefs.bestSellers.addEventListener("click", listBestLeft);
slideRefs.bestSellers.addEventListener("click", listBestRight);
