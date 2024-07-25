const express = require("express");
const { fetchProducts } = require("../controllers/imwebController.js");
const router = express.Router();

router.get("/fetch-products", fetchProducts);

module.exports = router;
