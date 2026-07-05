// ======================================
// products.js
// ShopEase Product Page
// ======================================

let allProducts = [];
let displayedProducts = [];

const productContainer = document.getElementById("productContainer");
const loader = document.getElementById("loader");

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortProductsSelect = document.getElementById("sortProducts");

// ===============================
// Initialize
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    loadProducts();

});

// ===============================
// Load Products
// ===============================

async function loadProducts() {

    loader.style.display = "flex";

    allProducts = await getAllProducts();

    displayedProducts = [...allProducts];

    displayProducts(displayedProducts);

    loader.style.display = "none";

}

// ===============================
// Display Products
// ===============================

function displayProducts(products) {

    productContainer.innerHTML = "";

    if (products.length === 0) {

        productContainer.innerHTML = `
            <h2 style="text-align:center;">
                No Products Found
            </h2>
        `;

        return;

    }

    products.forEach(product => {

        const card = createProductCard(product);

        productContainer.appendChild(card);

    });

}

// ===============================
// Product Card
// ===============================

function createProductCard(product) {

    const div = document.createElement("div");

    div.className = "product-card fade-in";

    div.innerHTML = `

        <img src="${product.image}"
             alt="${product.title}">

        <div class="product-info">

            <h3 class="product-title">

                ${product.title}

            </h3>

            <p class="product-category">

                ${product.category}

            </p>

            <div class="rating">

                ⭐ ${product.rating.rate}

            </div>

            <h2 class="product-price">

                $${product.price}

            </h2>

            <div class="product-buttons">

                <button
                    class="cart-btn"
                    onclick="addToCart(${product.id})">

                    Add to Cart

                </button>

                <button
                    class="wishlist-btn"
                    onclick="addToWishlist(${product.id})">

                    ❤️

                </button>

            </div>

        </div>

    `;

    div.addEventListener("click", (e) => {

        if (
            e.target.classList.contains("cart-btn") ||
            e.target.classList.contains("wishlist-btn")
        ) return;

        window.location.href =
            `product.html?id=${product.id}`;

    });

    return div;

}