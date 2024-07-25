const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes.js");
const cartRoutes = require("./routes/cartRoutes.js");
const orderRoutes = require("./routes/orderRoutes.js");
const paymentRoutes = require("./routes/paymentRoutes.js");
const imwebRoutes = require("./routes/imwebRoutes.js");

const app = express();

// CORS 설정
const corsOptions = {
  origin: ["http://localhost:3000", "https://fonts.gstatic.com"],
  optionsSuccessStatus: 200,
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Access-Control-Allow-Origin",
  ],
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

console.log("Initializing routes...");

// API routes
app.use("/api/auth", authRoutes);
console.log("Auth routes initialized.");
app.use("/api/cart", cartRoutes);
console.log("Cart routes initialized.");
app.use("/api/order", orderRoutes);
console.log("Order routes initialized.");
app.use("/api/payment", paymentRoutes);
console.log("Payment routes initialized.");
app.use("/api/products", imwebRoutes);
console.log("Product routes initialized.");

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
