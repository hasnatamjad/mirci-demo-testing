"use strict";
// Category data
const categories = [
  { id: 1, name: "Romanian Sausages", image: "/images/meat-sausages.jpg" },
  { id: 2, name: "Romanian Crisps", image: "/images/crisps.jpg" },
  { id: 3, name: "Romanina Cheese", image: "/images/cheese.jpg" },
  { id: 4, name: "Frutti Fresh", image: "/images/frutti-fresh-1.jpg" },
];

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
// Render categories
const categoryList = document.getElementById("categoryList");
let rowDiv;

categories.forEach((category, index) => {
  // Create new row every 4th category
  if (index % 4 === 0) {
    rowDiv = document.createElement("div");
    rowDiv.className = "row gap-4 gap-md-0";
    categoryList.appendChild(rowDiv);
  }

  const colDiv = document.createElement("div");
  colDiv.className = "col-md-6 col-lg-3 mb-3";

  const cardDiv = document.createElement("div");
  cardDiv.className = "card border-0 text-center";

  const img = document.createElement("img");
  img.src = category.image;
  img.alt = `${category.name} Image`;
  img.className = "card-img-top category-img overflow-hidden rounded-2";

  const cardBodyDiv = document.createElement("div");
  cardBodyDiv.className = "card-body";

  const title = document.createElement("h5");
  title.className = "card-title text-dark-green mb-4 ";
  title.textContent = category.name;

  const link = document.createElement("a");
  link.href = "products.html?category=" + category.name;
  link.className =
    "btn btn-success border-0 bg-dark-green text-white category-link";
  link.textContent = "See the category";

  cardBodyDiv.appendChild(title);
  cardBodyDiv.appendChild(link);

  cardDiv.appendChild(img);
  cardDiv.appendChild(cardBodyDiv);

  colDiv.appendChild(cardDiv);

  rowDiv.appendChild(colDiv);
});
