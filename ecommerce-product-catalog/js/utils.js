// ======================================
// utils.js
// ShopEase Utility Functions
// ======================================

/**
 * Format Currency
 */
function formatPrice(price) {
    return "$" + Number(price).toFixed(2);
}

/**
 * Generate Star Rating
 */
function generateStars(rating) {

    let stars = "";

    const fullStars = Math.floor(rating);

    for (let i = 0; i < fullStars; i++) {
        stars += "⭐";
    }

    return stars + " (" + rating + ")";
}

/**
 * Show Toast Message
 */
function showToast(message) {

    let toast = document.createElement("div");

    toast.className = "toast";

    toast.innerText = message;

    document.body.appendChild(toast);

    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.right = "20px";
    toast.style.background = "#2563eb";
    toast.style.color = "#fff";
    toast.style.padding = "12px 18px";
    toast.style.borderRadius = "8px";
    toast.style.zIndex = "9999";

    setTimeout(() => {

        toast.remove();

    }, 3000);

}

/**
 * Save to Local Storage
 */
function saveData(key, data) {

    localStorage.setItem(
        key,
        JSON.stringify(data)
    );

}

/**
 * Read from Local Storage
 */
function getData(key) {

    return JSON.parse(
        localStorage.getItem(key)
    ) || [];

}

/**
 * Check if product exists
 */
function exists(array, id) {

    return array.includes(id);

}

/**
 * Get URL Parameter
 */
function getQueryParameter(name) {

    const params = new URLSearchParams(
        window.location.search
    );

    return params.get(name);

}

/**
 * Scroll To Top
 */
function scrollToTop() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}

/**
 * Create Loader
 */
function showLoader(container) {

    container.innerHTML = `
        <div class="loader">
            <div class="spinner"></div>
        </div>
    `;

}

/**
 * Hide Loader
 */
function hideLoader(container) {

    container.innerHTML = "";

}