"use strict";

const topBar = ` <div class="bg-dark-green py-3" id="main-top-bar">
<p class="m-0 text-light text-center h6 font-mont">
  Free delivery on order 150£ +vat 25£ delivery charges for less then 150£
</p>
</div>`;

const mainHeader = ` <header class="px-3 py-2">
<nav class="navbar navbar-expand-lg bg-white">
  <div class="container-fluid">
    <a class="navbar-brand" style="width: 5rem" href="index.html">
      <img src="images/mirci-logo.jpg" class="img-fluid" alt="" />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a
            class="nav-link active"
            aria-current="page"
            href="index.html"
            >Home</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" id="shopLink" href="index.html#categories"
            >Shop</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="mailto:info@mirci.co.uk"
            >Contact Us</a
          >
        </li>
      </ul>
      <div class="d-flex" role="search">
        <a
          href="mailto:info@mirci.co.uk"
          class="btn btn-outline-success"
        >
          Order Now
        </a>
      </div>
    </div>
  </div>
</nav>
</header>
`;

const mainFooter = `
<footer class="bg-dark pt-5 pb-1 px-md-5 px-4">
        <div class="contair">
          <div class="d-flex flex-column flex-md-row">
            <!-- menu -->
            <div class="col-md-3 d-flex flex-column mb-5 mb-md-0">
              <h4 class="text-green mb-4">Our Products</h4>
              <div class="d-flex flex-column gap-2 w-75">
                <p class="text-light">
                  Specializing in the best grocery products from Bulgaria,
                  Albania, Romania, Turkey and More!!
                </p>
              </div>
            </div>

            <!-- menu -->
            <div class="col-md-3 d-flex flex-column mb-5 mb-md-0">
              <h4 class="text-green mb-4">Menu</h4>
              <div class="d-flex flex-column gap-2">
                <a href="index.html">Home</a>
                <a href="#">Shop</a>
                <a href="#">Contact Us</a>
              </div>
            </div>
            <!-- services -->
            <div class="col-md-3 d-flex flex-column mb-5 mb-md-0">
              <h4 class="text-green mb-4">Categories</h4>
              <div class="d-flex flex-column gap-2">
                <a href="/products.html?category=Romanian%20Sausages"
                  >Romanian Sausages</a
                >
                <a href="/products.html?category=Romanian%20Crisps"
                  >Romanian Crisps</a
                >
                <a href="/products.html?category=Romanina%20Cheese"
                  >Romanina Cheese</a
                >
                <a href="/products.html?category=Frutti%20Fresh"
                  >Frutti Fresh</a
                >
              </div>
            </div>
            <!-- contact us -->
            <div class="col-md-3 d-flex flex-column mb-5 mb-md-0">
              <h4 class="text-green mb-4">Contact Us</h4>
              <a href="tel:+447852132718" class="inline-block mb-3"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  class="bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  ></path>
                </svg>
                +44 7852 132718</a
              >

              <a
                href="mailto:info@garmentcareexpress.com"
                class="inline-block mb-3"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  class="bi bi-envelope-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"
                  ></path>
                </svg>
                info@mirci.co.uk</a
              >
              <a
                
                class="inline-block"
                
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                  />
                </svg>
                Shipping Within UK</a
              >
            </div>
          </div>
          <hr class="text-light" />
          <div
            class="d-flex flex-column flex-md-row justify-content-between align-items-md-center"
          >
            <p class="text-green">
              &copy;
              <script>
                document.write(new Date().getFullYear());
              </script>
              Mirci UK. All rights reserved.
            </p>
            <p class="copyright-text text-light">
              Designed by
              <span class="text-green text-decoration-underline"
                >Hasnat Amjad</span
              >
              | Powered by
              <a
                href="https://webroger.co.uk/"
                class="text-light-sky text-decoration-underline"
                >WEB ROGER</a
              >
            </p>
          </div>
        </div>
      </footer>`;

const pageHeader = document.getElementById("page-header");
const pageFooter = document.getElementById("page-footer");
const pageTopBar = document.getElementById("page-top-bar");

pageTopBar.insertAdjacentHTML("beforeend", topBar);
pageHeader.insertAdjacentHTML("beforeend", mainHeader);
pageFooter.insertAdjacentHTML("beforeend", mainFooter);
