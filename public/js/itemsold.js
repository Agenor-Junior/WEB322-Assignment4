
document.addEventListener("DOMContentLoaded", () => {
    const itemsList = document.getElementById("items-list");

    
    const groceryItems = [
        { title: "Apple", category: "Fruits", body: "Fresh and crisp apples, perfect for snacking or baking." },
        { title: "Banana", category: "Fruits", body: "Ripe bananas, high in potassium, great for smoothies." },
        { title: "Orange", category: "Fruits", body: "Juicy oranges, rich in Vitamin C." },
        { title: "Strawberries", category: "Fruits", body: "Sweet strawberries, great for desserts." },
        { title: "Blueberries", category: "Fruits", body: "Fresh blueberries, perfect for cereals and pancakes." },
        { title: "Carrot", category: "Vegetables", body: "Organic carrots, ideal for salads and soups." },
        { title: "Tomato", category: "Vegetables", body: "Juicy tomatoes, perfect for salads and sauces." },
        { title: "Spinach", category: "Vegetables", body: "Fresh spinach, packed with iron." },
        { title: "Broccoli", category: "Vegetables", body: "Green broccoli, perfect for steaming." },
        { title: "Potato", category: "Vegetables", body: "Starchy potatoes, great for mashing and roasting." },
        { title: "Milk", category: "Dairy", body: "Whole milk, rich in calcium for strong bones." },
        { title: "Eggs", category: "Dairy", body: "Free-range eggs, perfect for breakfast and baking." },
        { title: "Cheddar Cheese", category: "Dairy", body: "Sharp cheddar cheese, perfect for sandwiches." },
        { title: "Yogurt", category: "Dairy", body: "Creamy yogurt, available in various flavors." },
        { title: "Butter", category: "Dairy", body: "Creamy butter, ideal for cooking and baking." },
        { title: "Bread", category: "Bakery", body: "Freshly baked whole grain bread, perfect for sandwiches." },
        { title: "Bagel", category: "Bakery", body: "Soft bagels, perfect for breakfast." },
        { title: "Croissant", category: "Bakery", body: "Buttery croissants, flaky and delicious." },
        { title: "Muffin", category: "Bakery", body: "Blueberry muffins, fresh out of the oven." },
        { title: "Chicken Breast", category: "Meat", body: "Boneless, skinless chicken breast, great for grilling." },
        { title: "Ground Beef", category: "Meat", body: "Lean ground beef, great for tacos." },
        { title: "Pork Chops", category: "Meat", body: "Tender pork chops, ideal for grilling." },
        { title: "Salmon Fillet", category: "Meat", body: "Fresh salmon fillet, rich in Omega-3." },
        { title: "Almonds", category: "Nuts", body: "Roasted almonds, a healthy snack rich in protein." },
        { title: "Cashews", category: "Nuts", body: "Creamy cashews, perfect for snacking." },
        { title: "Walnuts", category: "Nuts", body: "Crunchy walnuts, great for baking." },
        { title: "Peanuts", category: "Nuts", body: "Salted peanuts, a classic snack." },
        { title: "Olive Oil", category: "Pantry", body: "Extra virgin olive oil, a must-have for cooking." },
        { title: "Pasta", category: "Pantry", body: "Durum wheat pasta, perfect for Italian dishes." },
        { title: "Rice", category: "Pantry", body: "Long-grain rice, a pantry staple." }
    ];

    populateItems(groceryItems);

    
    function populateItems(items) {
        if (!itemsList) {
            console.error("itemsList element not found.");
            return;
        }

        itemsList.innerHTML = "";
        itemsList.style.textAlign = "center"; 
        itemsList.style.listStyleType = "none"; 
        itemsList.style.padding = "0";
        itemsList.style.display = "flex";
        itemsList.style.flexDirection = "column";
        itemsList.style.alignItems = "center";

        items.forEach((item) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${item.title} (${item.category}) - ${item.body}`;
            listItem.style.marginBottom = "8px"; 
            itemsList.appendChild(listItem);
        });
    }
});
