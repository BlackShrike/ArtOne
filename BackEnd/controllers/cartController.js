const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const supabaseUrl = "https://hfpmfazzmqoybupgeuww.supabase.co";
const supabaseKey = process.env.SUPABASE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  const { data, error } = await supabase
    .from("Cart")
    .insert([{ user_id: userId, product_id: productId, quantity }]);

  if (error) return res.status(500).json({ error: error.message });

  res.status(200).json(data);
};

const getCartItems = async (req, res) => {
  const { userId } = req.params;

  const { data, error } = await supabase
    .from("Cart")
    .select("*, product:Products(*)")
    .eq("user_id", userId);

  if (error) return res.status(500).json({ error: error.message });

  res.status(200).json(data);
};

const removeFromCart = async (req, res) => {
  const { userId, productId } = req.body;

  const { data, error } = await supabase
    .from("Cart")
    .delete()
    .eq("user_id", userId)
    .eq("product_id", productId);

  if (error) return res.status(500).json({ error: error.message });

  res.status(200).json(data);
};

module.exports = { addToCart, getCartItems, removeFromCart };
