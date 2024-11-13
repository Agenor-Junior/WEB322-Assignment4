
let categories = [
    { category: "Fruits" },
    { category: "Vegetables" },
    { category: "Dairy" },
    { category: "Bakery" },
    { category: "Meat" }
   
];

let products = [
    // Fruits
    { title: "Apple", category: "Fruits", price: 1.5, body: "Fresh apples perfect for snacks." },
    { title: "Banana", category: "Fruits", price: 1.2, body: "Ripe bananas for smoothies." },
    { title: "Orange", category: "Fruits", price: 1.3, body: "Juicy oranges, rich in Vitamin C." },
    { title: "Strawberries", category: "Fruits", price: 3.5, body: "Sweet strawberries, great for desserts." },

    // Vegetables
    { title: "Carrot", category: "Vegetables", price: 0.9, body: "Crunchy carrots for salads." },
    { title: "Tomato", category: "Vegetables", price: 1.3, body: "Juicy tomatoes for sauces." },
    { title: "Spinach", category: "Vegetables", price: 2.0, body: "Fresh spinach, packed with iron." },
    { title: "Broccoli", category: "Vegetables", price: 1.8, body: "Green broccoli, perfect for steaming." },

    // Dairy
    { title: "Milk", category: "Dairy", price: 2.5, body: "Whole milk, rich in calcium." },
    { title: "Eggs", category: "Dairy", price: 3.0, body: "Free-range eggs for breakfast." },
    { title: "Cheddar Cheese", category: "Dairy", price: 4.5, body: "Sharp cheddar cheese, perfect for sandwiches." },
    { title: "Yogurt", category: "Dairy", price: 1.8, body: "Creamy yogurt, available in various flavors." },

    // Bakery
    { title: "Bread", category: "Bakery", price: 2.8, body: "Freshly baked whole grain bread." },
    { title: "Bagel", category: "Bakery", price: 1.5, body: "Soft bagels, perfect for breakfast." },
    { title: "Croissant", category: "Bakery", price: 2.2, body: "Buttery croissants, flaky and delicious." },
    { title: "Muffin", category: "Bakery", price: 1.9, body: "Blueberry muffins, fresh out of the oven." },

    // Meat
    { title: "Chicken Breast", category: "Meat", price: 5.5, body: "Boneless chicken breast." },
    { title: "Ground Beef", category: "Meat", price: 6.5, body: "Lean ground beef, great for tacos." },
    { title: "Pork Chops", category: "Meat", price: 7.0, body: "Tender pork chops, ideal for grilling." },
    { title: "Salmon Fillet", category: "Meat", price: 10.0, body: "Fresh salmon fillet, rich in Omega-3." }

   
];

document.addEventListener("DOMContentLoaded", () => {
    initializeCategoriesNav();
    displayProductsByCategory("Fruits"); 
});

function initializeCategoriesNav() {
    const categoriesNav = document.getElementById("categoriesNav");

    categories.forEach((category) => {
        const button = document.createElement("button");
        button.classList.add("btn", "btn-outline-primary", "me-2");
        button.style.marginRight = "10px"; 
        button.textContent = category.category;
        button.addEventListener("click", () => {
            displayProductsByCategory(category.category);
        });
        categoriesNav.appendChild(button);
    });
}

function createProductCard(product) {
    const card = document.createElement("div");
    card.classList.add("card", "mb-4");
    card.style.width = "18rem";

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = product.title;
    cardBody.appendChild(cardTitle);

    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.textContent = product.body;
    cardBody.appendChild(cardText);

    const productPrice = document.createElement("p");
    productPrice.classList.add("card-text", "fw-bold");
    productPrice.textContent = `$${product.price.toFixed(2)}`;
    cardBody.appendChild(productPrice);

    card.appendChild(cardBody);
    return card;
}

function displayProductsByCategory(categoryName) {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = "";

    const filteredProducts = products.filter(
        (product) => product.category === categoryName
    );

    filteredProducts.forEach((product) => {
        const productCard = createProductCard(product);
        productContainer.appendChild(productCard);
    });
}
