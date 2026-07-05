// ======================================
// wishlist.js
// ShopEase Wishlist
// ======================================

const wishlistContainer = document.getElementById("wishlistContainer");

// Load wishlist when page opens
document.addEventListener("DOMContentLoaded", loadWishlist);

// ===============================
// Load Wishlist
// ===============================

async function loadWishlist() {

    const wishlistIds = JSON.parse(
        localStorage.getItem("wishlist")
    ) || [];

    if (wishlistIds.length === 0) {

        wishlistContainer.innerHTML = `
            <h2 style="text-align:center;">
                ❤️ Your wishlist is empty.
            </h2>
        `;

        return;
    }

    const products = await getAllProducts();

    const wishlistProducts = products.filter(product =>
        wishlistIds.includes(product.id)
    );

    displayWishlist(wishlistProducts);
}

// ===============================
// Display Wishlist
// ===============================

function displayWishlist(products) {

    wishlistContainer.innerHTML = "";

    products.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `

            <img src="${product.image}" alt="${product.title}">

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
                        onclick="moveToCart(${product.id})">

                        Add to Cart

                    </button>

                    <button
                        class="remove-btn"
                        onclick="removeWishlist(${product.id})">

                        Remove

                    </button>

                </div>

            </div>

        `;

        wishlistContainer.appendChild(card);

    });

}

// ===============================
// Remove Item
// ===============================

function removeWishlist(id) {

    let wishlist = JSON.parse(
        localStorage.getItem("wishlist")
    ) || [];

    wishlist = wishlist.filter(item => item !== id);

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

    loadWishlist();

}

// ===============================
// Move To Cart
// ===============================

function moveToCart(id) {

    let cart = JSON.parse(
        localStorage.getItem("cart")
    ) || [];

    if (!cart.includes(id)) {

        cart.push(id);

    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    removeWishlist(id);

    alert("Product moved to cart.");

}