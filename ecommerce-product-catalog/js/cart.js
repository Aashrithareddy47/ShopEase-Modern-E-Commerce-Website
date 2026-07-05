// =====================================
// cart.js
// ShopEase Shopping Cart
// =====================================

const cartContainer = document.getElementById("cartContainer");
const cartTotal = document.getElementById("cartTotal");

// Load cart when page loads
document.addEventListener("DOMContentLoaded", loadCart);

// =====================================
// Load Cart
// =====================================

async function loadCart() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {

        cartContainer.innerHTML = `
            <h2 style="text-align:center;">
                🛒 Your cart is empty.
            </h2>
        `;

        cartTotal.textContent = "0.00";
        return;
    }

    const products = await getAllProducts();

    const cartProducts = products.filter(product =>
        cart.includes(product.id)
    );

    displayCart(cartProducts);

}

// =====================================
// Display Cart
// =====================================

function displayCart(products) {

    cartContainer.innerHTML = "";

    let total = 0;

    products.forEach(product => {

        total += product.price;

        const item = document.createElement("div");

        item.className = "cart-item";

        item.innerHTML = `

            <img src="${product.image}"
                 alt="${product.title}">

            <div class="cart-info">

                <h3>${product.title}</h3>

                <p>${product.category}</p>

                <h2 class="cart-price">

                    $${product.price.toFixed(2)}

                </h2>

            </div>

            <button
                class="remove-btn"
                onclick="removeCartItem(${product.id})">

                Remove

            </button>

        `;

        cartContainer.appendChild(item);

    });

    cartTotal.textContent = total.toFixed(2);

}

// =====================================
// Remove Product
// =====================================

function removeCartItem(id) {

    let cart = JSON.parse(
        localStorage.getItem("cart")
    ) || [];

    cart = cart.filter(item => item !== id);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    loadCart();

}

// =====================================
// Clear Cart
// =====================================

function clearCart() {

    localStorage.removeItem("cart");

    loadCart();

}

// =====================================
// Checkout
// =====================================

function checkout() {

    alert("Thank you for shopping with ShopEase!");

    clearCart();

}