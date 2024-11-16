const fs = require("fs").promises; // Using fs.promises API for cleaner async/await

let items = [];
let categories = [];

module.exports = {
     initialize: async function() {
        try {
            const itemsData = await fs.readFile('./data/items.json', 'utf8');
            items = JSON.parse(itemsData);
            console.log("Items loaded:", items); // Debugging line
            const categoriesData = await fs.readFile('./data/categories.json', 'utf8');
            categories = JSON.parse(categoriesData);
        } catch (err) {
            throw new Error("Unable to initialize data: " + err.message);
        }
    },

    addItem: async function (itemData) {
        try {
            const currentDate = new Date();
            const postDate = currentDate.toISOString().split("T")[0];
            itemData.postDate = postDate;
            
            // Generate a unique ID for the new item
            itemData.id = items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1; // Auto-incrementing ID

            items.push(itemData);

            // Write the updated items array to the file
            await fs.writeFile("./data/items.json", JSON.stringify(items, null, 2));

            return itemData;
        } catch (err) {
            throw new Error("Error saving the new item: " + err.message);
        }
    },

    getAllItems: async function() {
        if (items.length === 0) {
            throw new Error("No items available");
        }
        return items;
    },

    getItemsByCategory: async function(category) {
        const filteredItems = items.filter(item => item.category === category);
        if (filteredItems.length === 0) {
            throw new Error(`No items found for category: ${category}`);
        }
        return filteredItems;
    },

    getItemsByMinDate: async function(minDateStr) {
        const filteredItems = items.filter(item => new Date(item.postDate) >= new Date(minDateStr));
        if (filteredItems.length === 0) {
            throw new Error(`No items found with date after ${minDateStr}`);
        }
        return filteredItems;
    },

    getItemById: async function(id) {
        const item = items.find(item => item.id === Number(id)); // Convert id to a number
        if (!item) {
            throw new Error(`No item found with id: ${id}`);
        }
        return item;
    },
    

    getPublishedItems: async function() {
        const publishedItems = items.filter(item => item.published === true);
        if (publishedItems.length === 0) {
            throw new Error("No published items found");
        }
        return publishedItems;
    },

    getPublishedItemsByCategory: async function(category) {
        return items.filter(item => item.category === Number(category) && item.published === true);
    },
    

    getCategories: async function() {
        if (categories.length === 0) {
            throw new Error("No categories found");
        }
        return categories;
    }
};
