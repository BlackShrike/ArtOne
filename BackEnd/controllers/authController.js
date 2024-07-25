const { createClient } = require("@supabase/supabase-js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const supabaseUrl = "https://hfpmfazzmqoybupgeuww.supabase.co";
const supabaseKey = process.env.SUPABASE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const register = async (req, res) => {
  const {
    username,
    password,
    email,
    name,
    phoneNumber,
    birthdate,
    address,
    addressDetail,
    zonecode,
    marketing_agree_sms,
    marketing_agree_email,
    third_party_agree,
    send_alarm,
  } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const { data, error } = await supabase
    .from("users")
    .insert([
      {
        username,
        password: hashedPassword,
        email,
        name,
        phone_number: phoneNumber,
        birthdate,
        address,
        address_detail: addressDetail,
        zonecode,
        marketing_agree_sms: marketing_agree_sms === "Y",
        marketing_agree_email: marketing_agree_email === "Y",
        third_party_agree: third_party_agree === "Y",
        send_alarm: send_alarm === "Y",
      },
    ])
    .select();

  if (error) {
    console.error("Error inserting user:", error);
    return res.status(400).json({ error: error.message });
  }

  console.log("Inserted user data:", data);
  res.json({ message: "User registered successfully!" });
};

const login = async (req, res) => {
  const { username, password } = req.body;

  const { data: user, error } = await supabase
    .from("users")
    .select("*")
    .eq("username", username)
    .single();

  if (error) return res.status(400).json({ error: "Invalid credentials" });

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return res.status(400).json({ error: "Invalid credentials" });

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ message: "Logged in successfully!", token });
};

module.exports = { register, login };
