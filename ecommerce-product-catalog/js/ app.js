if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

// ======================================
// ShopEase Homepage
// app.js
// ======================================

const featuredContainer = document.getElementById("featuredProducts");

// Load Featured Products
document.addEventListener("DOMContentLoaded", () => {

    loadFeaturedProducts();

});

// ===============================
// Load Products
// ===============================

async function loadFeaturedProducts() {

    if (!featuredContainer) return;

    try {

        const products = await getAllProducts();

        const featured = products.slice(0, 8);

        displayFeaturedProducts(featured);

    } catch (error) {

        console.error(error);

    }

}

// ===============================
// Display Products
// ===============================

function displayFeaturedProducts(products) {

    featuredContainer.innerHTML = "";

    products.forEach(product => {

        featuredContainer.innerHTML += `

        <div class="product-card fade-in">

            <img
                src="${product.image}"
                alt="${product.title}"
            >

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

                    $${product.price.toFixed(2)}

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

        </div>

        `;

    });

}

// ===============================
// Add To Cart
// ===============================

function addToCart(id) {

    let cart = JSON.parse(
        localStorage.getItem("cart")
    ) || [];

    if (!cart.includes(id)) {

        cart.push(id);

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

        alert("Product added to Cart!");

    } else {

        alert("Already in Cart.");

    }

}

// ===============================
// Add To Wishlist
// ===============================

function addToWishlist(id) {

    let wishlist = JSON.parse(
        localStorage.getItem("wishlist")
    ) || [];

    if (!wishlist.includes(id)) {

        wishlist.push(id);

        localStorage.setItem(
            "wishlist",
            JSON.stringify(wishlist)
        );

        alert("Added to Wishlist!");

    } else {

        alert("Already in Wishlist.");

    }

}