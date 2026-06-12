// Farm Products Array of Objects
const farmProducts = [
  {
    name: "Fresh Eggs",
    category: "dairy & eggs",
    description: "Farm-fresh eggs available year-round from our 200-hen flock.",
    image: "eggs.png",
    displayNote: "From the 200-hen flock"
  },
  {
    name: "Raw Honey",
    category: "pantry",
    description: "Local raw honey harvested from three on-site hives. Unfiltered and full of flavor.",
    image: "rawhoney.png",
    displayNote: "From farm hives"
  },
  {
    name: "Strawberry Preserves",
    category: "pantry",
    description: "Small-batch preserves made in-house with strawberries from our spring u-pick fields.",
    image: "strawberrypreserves.png",
    displayNote: "Made in-house"
  },
  {
    name: "Blueberry Preserves",
    category: "pantry",
    description: "Small-batch preserves made from peak-season blueberries picked right here on the farm.",
    image: "blueberrypreserves.png",
    displayNote: "Made in-house"
  },
  {
    name: "Fresh Apple Cider",
    category: "seasonal",
    description: "Fresh cider pressed on-site using apples from our orchard. Sold by the jug.",
    image: "applecider.png",
    displayNote: "Available in fall"
  },
  {
    name: "Sourdough Bread",
    category: "baked goods",
    description: "Fresh-baked sourdough loaves available every weekend while supplies last.",
    image: "sourdough.png",
    displayNote: "Weekends only"
  },
  {
    name: "Apple Pie",
    category: "baked goods",
    description: "Farm-made pie baked with seasonal apples. A Hollow Creek Farm favorite every fall.",
    image: "images/products/product-apple-pie.png",
    displayNote: "Weekends only"
  },
  {
    name: "Seasonal Produce Basket",
    category: "seasonal",
    description: "A rotating selection of fresh produce straight from the farm fields. Changes each week.",
    image: "basket.png",
    displayNote: "Changes by season"
  },
  {
    name: "Beeswax Candles",
    category: "local goods",
    description: "Handmade candles crafted from beeswax harvested right here at Hollow Creek Farm.",
    image: "beeswax.png",
    displayNote: "From farm hives"
  },
  {
    name: "Branded Tote Bag",
    category: "merchandise",
    description: "A sturdy reusable tote featuring the Hollow Creek Farm brand. Perfect for market days.",
    image: "tote.png",
    displayNote: "HCF merch"
  }
];


//  CREATE CARD 
const createProductCard = (product) => {

  // outer column
  const col = document.createElement("div");
  col.className = "col-sm-6 col-lg-4";

  // article card
  const card = document.createElement("article");
  card.className = "product-card";

  // image wrapper
  const imgWrap = document.createElement("div");
  imgWrap.className = "product-card-img-wrap";

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.name + " from Hollow Creek Farm";
  img.className = "product-card-img";
  // Image credit: Provided Hollow Creek Farm asset folder. Licensed for class use.

  imgWrap.appendChild(img);

  // card body
  const body = document.createElement("div");
  body.className = "product-card-body";

  const tag = document.createElement("span");
  tag.className = "product-tag";
  tag.textContent = product.category;

  const title = document.createElement("h3");
  title.className = "product-card-title";
  title.textContent = product.name;

  const note = document.createElement("p");
  note.className = "product-display-note";
  note.textContent = product.displayNote;

  const desc = document.createElement("p");
  desc.className = "product-card-desc";
  desc.textContent = product.description;

  // add to cart button (decorative — no real cart)
  const btn = document.createElement("button");
  btn.className = "product-cart-btn";
  btn.textContent = "Add to Cart";

  btn.addEventListener("click", () => {
    btn.textContent = "Added!";
    btn.classList.add("added");
    setTimeout(() => {
      btn.textContent = "Add to Cart";
      btn.classList.remove("added");
    }, 1500);
  });

  // put body together
  body.appendChild(tag);
  body.appendChild(title);
  body.appendChild(note);
  body.appendChild(desc);
  body.appendChild(btn);

  // put card together
  card.appendChild(imgWrap);
  card.appendChild(body);

  col.appendChild(card);

  return col;
};


//  RENDER PRODUCTS 
const renderProducts = (filter) => {
  const grid = document.getElementById("store-grid");
  const emptyMsg = document.getElementById("store-empty");

  // clear the grid
  grid.innerHTML = "";

  // filter the array
  let productsToShow = [];

  if (filter === "all") {
    productsToShow = farmProducts;
  } else {
    farmProducts.forEach((product) => {
      if (product.category === filter) {
        productsToShow.push(product);
      }
    });
  }

  // show empty message if nothing matches
  if (productsToShow.length === 0) {
    emptyMsg.classList.remove("d-none");
    return;
  }

  emptyMsg.classList.add("d-none");

  // build and append each card
  productsToShow.forEach((product) => {
    const card = createProductCard(product);
    grid.appendChild(card);
  });
};


//  FILTER BUTTONS 
const initFilter = () => {
  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {

      // remove active from all buttons
      buttons.forEach((b) => b.classList.remove("active"));

      // add active to clicked button
      btn.classList.add("active");

      // re-render with selected category
      renderProducts(btn.dataset.filter);
    });
  });
};


//  ON PAGE LOAD
document.addEventListener("DOMContentLoaded", () => {
  renderProducts("all");
  initFilter();
});