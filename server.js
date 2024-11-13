/*********************************************************************************

WEB322 – Assignment 02
I declare that this assignment is my own work in accordance with Seneca Academic Policy. 
No part of this assignment has been copied manually or electronically from any other source 
(including 3rd party web sites) or distributed to other students.

Name: Agenor Dionizio da Silva Junior
Student ID: 138121223
Date: Oct 31, 2024
Replit Web App URL: 
GitHub Repository URL: https://github.com/Agenor-Junior/web322-app.git

********************************************************************************/

const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");
const path = require("path");
const storeService = require("./store-service");
const app = express();

// Port configuration
const HTTP_PORT = process.env.PORT || 8080;

// Cloudinary configuration
cloudinary.config({
    cloud_name: "dzpqolir8",
    api_key: "276645628487539",
    api_secret: "0fIuUfpETj4oXp50Uz1xZSURmkQ",
    secure: true
});

const upload = multer();

// Middleware for static files
app.use(express.static("public"));

// Routes

// Home route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/about.html"));
});

// About route
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/about.html"));
});

// Home route (redundant but keeping as per original code)
app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"));
});

// Shop route
app.get("/shop", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/shop.html"));
});

// Add item form
app.get("/add", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/addItem.html"));
});

app.get("/items", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/items.html"));
});


// Shop items as JSON
app.get("/api/shop", (req, res) => {
    storeService.getPublishedItems()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
});

// List all items
app.get("/api/items", (req, res) => {
    storeService.getAllItems()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
});

// Categories list
app.get("/categories", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/categories.html"));
});

app.get("/api/categories", (req, res) => {
    storeService.getCategories()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }));
});

// Route to handle adding a new item with image upload
app.post("/items/add", upload.single("featureImage"), async (req, res) => {
    let imageUrl = "";

    try {
        // Upload image if file exists
        if (req.file) {
            const streamUpload = (req) => {
                return new Promise((resolve, reject) => {
                    const stream = cloudinary.uploader.upload_stream((error, result) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(result);
                        }
                    });
                    streamifier.createReadStream(req.file.buffer).pipe(stream);
                });
            };

            const uploadResult = await streamUpload(req);
            imageUrl = uploadResult.url;
        }

        // Set item properties
        req.body.featureImage = imageUrl;
        req.body.published = req.body.published ? true : false;

        // Add the item to the store
        await storeService.addItem(req.body);

        // Redirect to items page
        res.redirect("/items");
    } catch (err) {
        console.error("Erro durante o processo de adição de item:", err);

        if (!res.headersSent) {
            res.status(500).send("Erro ao adicionar item.");
        }
    }
});

// Custom 404 page for unmatched routes
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "/views/404.html"));
});

// Start the server
storeService.initialize()
    .then(() => {
        app.listen(HTTP_PORT, () => {
            console.log(`Express http server listening on port: ${HTTP_PORT}`);
        });
    })
    .catch((err) => {
        console.log("Failed to initialize data:", err);
    });

