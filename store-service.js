/*********************************************************************************

WEB322 – Assignment 02
I declare that this assignment is my own work in accordance with Seneca Academic Policy. 
No part of this assignment has been copied manually or electronically from any other source 
(including 3rd party web sites) or distributed to other students.

Name: Agenor Dionizio da Silva Junior
Date: Oct 31, 2024
Student ID: 138121223
Replit Web App URL: 
GitHub Repository URL: https://github.com/Agenor-Junior/web322-app.git

********************************************************************************/

const fs = require("fs");

let itemsArray = [];
let categoriesArray = [];

const pathToItems = "./data/items.json";
const pathToCat = "./data/categories.json";

function initialize() {
    return new Promise((resolve, reject) => {
        fs.readFile(pathToItems, "utf8", (err, jsonString) => {
            if (err) {
                return reject("Unable to read ITEMS file");
            }

            try {
                // Parse the items file
                itemsArray = JSON.parse(jsonString);

                fs.readFile(pathToCat, "utf-8", (err, jsonString) => {
                    if (err) {
                        return reject("Unable to read CATEGORIES file");
                    }
                    try {
                        // Parse the categories file
                        categoriesArray = JSON.parse(jsonString);
                        resolve("Initialization successful!");
                    } catch (error) {
                        reject("Unable to parse CATEGORIES file");
                    }
                });
            } catch (error) {
                reject("Unable to parse ITEMS file");
            }
        });
    });
}

function getAllItems() {
    return new Promise((resolve, reject) => {
        itemsArray.length === 0 ? reject("no results returned") : resolve(itemsArray);
    });
}

function getPublishedItems() {
    return new Promise((resolve, reject) => {
        const publishedItems = itemsArray.filter((item) => item.published);
        publishedItems.length === 0 ? reject("no results returned") : resolve(publishedItems);
    });
}

function getCategories() {
    return new Promise((resolve, reject) => {
        categoriesArray.length === 0 ? reject("no results returned") : resolve(categoriesArray);
    });
}

function addItem(itemData) {
    return new Promise((resolve, reject) => {
        itemData.published = itemData.published ? true : false;
        itemData.id = itemsArray.length + 1;
        itemsArray.push(itemData);
        resolve(itemData);
    });
}

// Step 1: Function to get items by category
function getItemsByCategory(category) {
    return new Promise((resolve, reject) => {
        const filteredItems = itemsArray.filter(item => item.category === category);
        filteredItems.length ? resolve(filteredItems) : reject("no results returned");
    });
}

// Step 2: Function to get items by minimum date
function getItemsByMinDate(minDateStr) {
    return new Promise((resolve, reject) => {
        const minDate = new Date(minDateStr);
        const filteredItems = itemsArray.filter(item => new Date(item.postDate) >= minDate);
        filteredItems.length ? resolve(filteredItems) : reject("no results returned");
    });
}

// Step 3: Function to get item by ID
function getItemById(id) {
    return new Promise((resolve, reject) => {
        const item = itemsArray.find(item => item.id === parseInt(id));
        item ? resolve(item) : reject("no result returned");
    });
}

// Exporting the functions
module.exports = {
    initialize,
    getAllItems,
    getPublishedItems,
    getCategories,
    addItem,
    getItemsByCategory,
    getItemsByMinDate,
    getItemById
};
