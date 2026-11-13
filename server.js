
const express = require("express");
const path = require("path");

const server = express();

// Middleware
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// Homepage
server.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "webpage.html"));
});

// Homepage routes
server.get("/webpage", (req, res) => {
    res.sendFile(path.join(__dirname, "webpage.html"));
});

server.get("/skincare", (req, res) => {
    res.sendFile(path.join(__dirname, "webpage.html"));
});

// Products page
server.get("/products", (req, res) => {
    res.sendFile(path.join(__dirname, "products.html"));
});

// Cart page
server.get("/cart", (req, res) => {
    res.sendFile(path.join(__dirname, "cart.html"));
});

// Checkout page
server.get("/checkout", (req, res) => {
    res.sendFile(path.join(__dirname, "checkout.html"));
});

// Back to homepage
server.get("/goBack", (req, res) => {
    res.redirect("/skincare");
});

// Static files (CSS, JavaScript, images)
server.use(express.static(__dirname));

// Handle unknown routes
server.use((req, res) => {
    res.status(404).send("Page not found!");
});

// Start server
const PORT = 8000;

server.listen(PORT, () => {
    console.log(`GlowSkin server is running at http://localhost:${PORT}`);
});

