const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const supabaseUrl = "https://hfpmfazzmqoybupgeuww.supabase.co";
const supabaseKey = process.env.SUPABASE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const createOrder = async (req, res) => {
  const { userId, items, totalAmount } = req.body;

  const { data, error } = await supabase
    .from("Orders")
    .insert([{ user_id: userId, items, total_amount: totalAmount }]);

  if (error) return res.status(500).json({ error: error.message });

  res.status(200).json(data);
};

const getOrder = async (req, res) => {
  const { orderId } = req.params;

  const { data, error } = await supabase
    .from("Orders")
    .select("*")
    .eq("id", orderId)
    .single();

  if (error) return res.status(500).json({ error: error.message });

  res.status(200).json(data);
};

const getOrders = async (req, res) => {
  const { userId } = req.params;

  const { data, error } = await supabase
    .from("Orders")
    .select("*")
    .eq("user_id", userId);

  if (error) return res.status(500).json({ error: error.message });

  res.status(200).json(data);
};

module.exports = { createOrder, getOrder, getOrders };
