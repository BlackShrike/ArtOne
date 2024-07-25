const axios = require("axios");
const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();

const getAccessToken = async () => {
  const url = `https://${process.env.CAFE24_MALL_ID}.cafe24api.com/api/v2/oauth/token`;
  const data = new URLSearchParams({
    grant_type: "authorization_code",
    code: process.env.CAFE24_AUTHORIZATION_CODE,
    client_id: process.env.CAFE24_CLIENT_ID,
    client_secret: process.env.CAFE24_CLIENT_SECRET,
    redirect_uri: process.env.CAFE24_REDIRECT_URI,
  });

  const response = await axios.post(url, data, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  return response.data.access_token;
};

const getProducts = async (accessToken) => {
  const url = `https://${process.env.CAFE24_MALL_ID}.cafe24api.com/api/v2/admin/products`;

  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  return response.data.products;
};

const fetchAndSaveProducts = async () => {
  const accessToken = await getAccessToken();
  const products = await getProducts(accessToken);

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_API_KEY
  );

  for (const product of products) {
    const { data, error } = await supabase.from("Products").insert([
      {
        id: product.product_no,
        name: product.product_name,
        price: product.price,
        // 필요한 다른 필드들도 여기에 추가
      },
    ]);

    if (error) console.error(error);
  }
};

fetchAndSaveProducts();
