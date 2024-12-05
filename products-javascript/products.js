"use strict";

// Product data
const products = [
  // Romanian Sausages DATA
  {
    id: 1,
    name: "Mici Sausage",
    image: "/products/mici-romanian-sausages.jpg",
    category: "Romanian Sausages",
  },

  {
    id: 2,
    name: "Sibiu Salami",
    image: "/products/Sibiu-salami.jpg",
    category: "Romanian Sausages",
  },

  {
    id: 3,
    name: "Romanian Plescoi",
    image: "/products/Romanian-Plescoi-Sausages.png",
    category: "Romanian Sausages",
  },

  // Romanian Crisps DATA
  {
    id: 4,
    name: "Croco Crisps",
    image: "/products/croco-crisps.jpg",
    category: "Romanian Crisps",
  },

  {
    id: 5,
    name: "Crunchips",
    image: "/products/crunchips.png",
    category: "Romanian Crisps",
  },

  {
    id: 6,
    name: "Chio Chips",
    image: "/products/chip-chips-crisps.jpg",
    category: "Romanian Crisps",
  },

  // Romanina Cheese DATA

  {
    id: 7,
    name: "Telemea",
    image: "/products/telemea.jpg",
    category: "Romanina Cheese",
  },

  {
    id: 8,
    name: "Cascaval",
    image: "/products/Cascaval.jpg",
    category: "Romanina Cheese",
  },

  {
    id: 9,
    name: "Urda cheese",
    image: "/products/urda-cheese.jpg",
    category: "Romanina Cheese",
  },

  {
    id: 10,
    name: "Frutti Pear",
    image: "/products/frutti-peach.jpg",
    category: "Frutti Fresh",
  },
  {
    id: 11,
    name: "Frutti Peach",
    image: "/products/frutti-pear.jpg",
    category: "Frutti Fresh",
  },
  {
    id: 12,
    name: "Frutti Mint",
    image: "/products/frutti-mint.jpg",
    category: "Frutti Fresh",
  },
  {
    id: 12,
    name: "Frutti Mint",
    image: "/products/frutti-mint.jpg",
    category: "Frutti Fresh",
  },
  
  {
    id: 737,
    name: "Frutti Black",
    image: "/products/frutti-fresh-black.png",
    category: "Frutti Fresh",
  },
];

// **************************************************
// ALERT: DO NOT GO BELOW THESE STARS !!!!!
// **************************************************
// **************************************************
// **************************************************
// **************************************************
// **************************************************
// **************************************************
// **************************************************
// **************************************************
// **************************************************
// **************************************************
// **************************************************
// **************************************************
// **************************************************
// **************************************************
// **************************************************
// **************************************************
// **************************************************
// **************************************************
// **************************************************
// **************************************************
// **************************************************
// **************************************************
// **************************************************
// **************************************************
// **************************************************
// **************************************************
// **************************************************

// Render products
const productList = document.getElementById("productList");
const urlParams = new URLSearchParams(window.location.search);
const categoryName = urlParams.get("category");

if (categoryName) {
  const filteredProducts = products.filter(
    (product) => product.category === categoryName
  );

  let rowDiv;
  filteredProducts.forEach((product, index) => {
    if (index % 3 === 0) {
      rowDiv = document.createElement("div");
      rowDiv.className = "row gap-5 gap-md-0 text-center";
      productList.appendChild(rowDiv);
    }

    const colDiv = document.createElement("div");
    colDiv.className = "col-md-4 mb-3";

    const cardDiv = document.createElement("div");
    cardDiv.className = "card border-0";

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = `${product.name} Image`;
    img.className =
      "card-img-top product-img overflow-hidden rounded-1 border mx-auto";

    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.className = "card-body";

    const title = document.createElement("h5");
    title.className = "card-title text-dark fw-bold mb-4";
    title.textContent = product.name;

    const link = document.createElement("a");
    link.href = `product.html?id=${product.id}`;
    link.className = "btn btn-success bg-dark-green border-0 px-4 py-2";
    link.textContent = "View Product";

    cardBodyDiv.appendChild(title);
    cardBodyDiv.appendChild(link);

    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBodyDiv);

    colDiv.appendChild(cardDiv);

    rowDiv.appendChild(colDiv);
  });
}

// Set the category name
const categoryNameElement = document.getElementById("categoryName");
categoryNameElement.textContent = categoryName;
