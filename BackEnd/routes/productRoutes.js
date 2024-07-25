const express = require("express");
const { fetchAndSaveProducts } = require("../controllers/getProducts");
const router = express.Router();

router.get("/fetch-products", async (req, res) => {
  try {
    await fetchAndSaveProducts();
    res
      .status(200)
      .json({ message: "Products fetched and saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
