const { createClient } = require("@supabase/supabase-js");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_API_KEY
);

const addToCart = async (req, res) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ error: "Access denied" });

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) return res.status(401).json({ error: "Invalid token" });

    const { product_id, quantity } = req.body;

    const { data, error } = await supabase
      .from("Cart")
      .insert([{ user_id: decoded.userId, product_id, quantity }]);

    if (error) return res.status(400).json({ error: error.message });

    res.json({ message: "Item added to cart" });
  });
};

module.exports = { addToCart };
