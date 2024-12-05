"use strict";

const products = [
  // Romanian Sausages DATA
  {
    id: 1,
    name: "Mici Sausage",
    image: "/products/mici-romanian-sausages.jpg",
    description: "Description for Mici Sausage",
    category: "Romanian Sausages",
  },
  {
    id: 2,
    name: "Sibiu Salami",
    image: "/products/Sibiu-salami.jpg",
    description: "Description for Sibiu Salami",
    category: "Romanian Sausages",
  },
  {
    id: 3,
    name: "Romanian Plescoi",
    image: "/products/Romanian-Plescoi-Sausages.png",
    description: "Description for Romanian Plescoi",
    category: "Romanian Sausages",
  },

  // Romanian Crisps DATA
  {
    id: 4,
    name: "Croco Crisps",
    image: "/products/croco-crisps.jpg",
    description: "Description for Croco Crisps",
    category: "Romanian Crisps",
  },
  {
    id: 5,
    name: "Crunchips",
    image: "/products/crunchips.png",
    description: "Description for Crunchips",
    category: "Romanian Crisps",
  },
  {
    id: 6,
    name: "Chio Chips",
    image: "/products/chip-chips-crisps.jpg",
    description: "Description for Chio Chips",
    category: "Romanian Crisps",
  },

  // Romanian Cheese DATA
  {
    id: 7,
    name: "Telemea",
    image: "/products/telemea.jpg",
    description: "Description for Telemea",
    category: "Romanina Cheese",
  },
  {
    id: 8,
    name: "Cascaval",
    image: "/products/Cascaval.jpg",
    description: "Description for Cascaval",
    category: "Romanina Cheese",
  },
  {
    id: 9,
    name: "Urda cheese",
    image: "/products/urda-cheese.jpg",
    description: "Description for Urda Cheese",
    category: "Romanina Cheese",
  },

  // Frutti Fresh DATA
  {
    id: 10,
    name: "Frutti Pear",
    image: "/products/frutti-peach.jpg",
    description: "Description for Frutti Pear",
    category: "Frutti Fresh",
  },
  {
    id: 11,
    name: "Frutti Peach",
    image: "/products/frutti-pear.jpg",
    description: "Description for Frutti Peach",
    category: "Frutti Fresh",
  },
  {
    id: 12,
    name: "Frutti Mint",
    image: "/products/frutti-mint.jpg",
    description: "Description for Frutti Mint",
    category: "Frutti Fresh",
  },
];

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

const product = products.find((product) => product.id === parseInt(productId));

const productDetails = document.getElementById("productDetails");
if (product) {
  const containerDiv = document.createElement("div");
  containerDiv.className = "container";

  const rowDiv = document.createElement("div");
  rowDiv.className = "row gap-2 gap-md-0 justify-content-center mb-5";

  const imageColDiv = document.createElement("div");
  imageColDiv.className = "col-md-5";

  const image = document.createElement("img");
  image.src = product.image;
  image.className =
    "img-fluid col-12 col-md-10 mx-auto justify-content-end border rounded-2";
  image.alt = "";

  const infoColDiv = document.createElement("div");
  infoColDiv.className = "col-md-4 pt-3";

  const productName = document.createElement("h3");
  productName.className = "mb-2 fw-bold";
  productName.textContent = product.name;

  const category = document.createElement("p");
  category.className = "mb-2";
  category.innerHTML = `<span class="text-dark-green fw-bold">Category:</span> ${product.category}`;

  const ratingRowDiv = document.createElement("div");
  ratingRowDiv.className = "row align-items-center my-4";

  const ratingContainerDiv = document.createElement("div");
  ratingContainerDiv.className = "d-flex gap-2";

  const ratingDiv = document.createElement("div");
  const rating = document.createElement("h6");
  rating.className = "rating";
  rating.textContent = "4.9 Rating";
  ratingDiv.appendChild(rating);

  const ratingStarsDiv = document.createElement("div");
  ratingStarsDiv.className = "rating-stars";
  ratingStarsDiv.innerHTML = `
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star-half-alt checked"></span>
  `;
  ratingContainerDiv.appendChild(ratingDiv);
  ratingContainerDiv.appendChild(ratingStarsDiv);

  const trustedByRowDiv = document.createElement("div");
  trustedByRowDiv.className = "row";

  const trustedBy = document.createElement("h6");
  trustedBy.className = "trusted-by text-dark-green";
  trustedBy.textContent = "Trusted by 5000+ families";
  trustedByRowDiv.appendChild(trustedBy);

  ratingRowDiv.appendChild(ratingContainerDiv);
  ratingRowDiv.appendChild(trustedByRowDiv);

  const productInquiryLink = document.createElement("a");
  productInquiryLink.href = "mailto:info@mirci.co.uk";
  productInquiryLink.className = "btn btn-danger";
  productInquiryLink.style.fontSize = "0.8rem";
  productInquiryLink.textContent = "Product Inquiry";

  infoColDiv.appendChild(productName);
  infoColDiv.appendChild(category);
  infoColDiv.appendChild(ratingRowDiv);
  infoColDiv.appendChild(productInquiryLink);

  imageColDiv.appendChild(image);

  rowDiv.appendChild(imageColDiv);
  rowDiv.appendChild(infoColDiv);

  containerDiv.appendChild(rowDiv);

  productDetails.appendChild(containerDiv);
} else {
  productDetails.textContent = "Product not found.";
}
