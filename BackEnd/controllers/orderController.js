const { createClient } = require("@supabase/supabase-js");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_API_KEY
);

const placeOrder = async (req, res) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ error: "Access denied" });

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) return res.status(401).json({ error: "Invalid token" });

    const { total_amount, items } = req.body;

    const { data: order, error: orderError } = await supabase
      .from("Orders")
      .insert([{ user_id: decoded.userId, total_amount, status: "pending" }]);

    if (orderError) return res.status(400).json({ error: orderError.message });

    const orderItems = items.map((item) => ({
      order_id: order.id,
      product_id: item.product_id,
      quantity: item.quantity,
      price: item.price,
    }));

    const { error: itemsError } = await supabase
      .from("OrderItems")
      .insert(orderItems);

    if (itemsError) return res.status(400).json({ error: itemsError.message });

    res.json({ message: "Order placed successfully!" });
  });
};

module.exports = { placeOrder };
