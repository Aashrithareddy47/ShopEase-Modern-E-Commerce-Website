// ======================================
// ShopEase API Module
// ======================================

const API_BASE_URL = "https://fakestoreapi.com/products";

/**
 * Fetch all products
 */
async function getAllProducts() {
    try {
        const response = await fetch(API_BASE_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}

/**
 * Fetch a single product
 */
async function getProductById(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/${id}`);

        if (!response.ok) {
            throw new Error("Product not found");
        }

        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}

/**
 * Fetch all categories
 */
async function getCategories() {
    try {
        const response = await fetch(`${API_BASE_URL}/categories`);

        if (!response.ok) {
            throw new Error("Unable to load categories");
        }

        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

/**
 * Fetch products by category
 */
async function getProductsByCategory(category) {

    if (category === "all") {
        return await getAllProducts();
    }

    try {

        const response = await fetch(
            `${API_BASE_URL}/category/${category}`
        );

        if (!response.ok) {
            throw new Error("Unable to fetch category");
        }

        return await response.json();

    } catch (error) {

        console.error(error);

        return [];

    }

}

/**
 * Search Products
 * (FakeStore API doesn't support search,
 * so search locally)
 */
function searchProducts(products, keyword) {

    keyword = keyword.toLowerCase();

    return products.filter(product =>
        product.title.toLowerCase().includes(keyword) ||
        product.description.toLowerCase().includes(keyword)
    );

}

/**
 * Sort Products
 */
function sortProducts(products, type) {

    const sorted = [...products];

    switch (type) {

        case "low-high":
            sorted.sort((a, b) => a.price - b.price);
            break;

        case "high-low":
            sorted.sort((a, b) => b.price - a.price);
            break;

        case "rating":
            sorted.sort(
                (a, b) => b.rating.rate - a.rating.rate
            );
            break;

        default:
            break;

    }

    return sorted;

}