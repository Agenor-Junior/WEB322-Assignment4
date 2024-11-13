
document.addEventListener("DOMContentLoaded", () => {
    const categoriesList = document.getElementById("categories-list");

    
    const groceryCategories = [
        { category: "Fruits" },
        { category: "Vegetables" },
        { category: "Dairy" },
        { category: "Bakery" },
        { category: "Meat" }
       
    ];

    populateCategories(groceryCategories);

    
    function populateCategories(categories) {
        if (!categoriesList) {
            console.error("categoriesList element not found.");
            return;
        }
        categoriesList.innerHTML = "";

        categories.forEach((category) => {
            const listItem = document.createElement("li");
            listItem.textContent = category.category;
            categoriesList.appendChild(listItem);
        });
    }
});
