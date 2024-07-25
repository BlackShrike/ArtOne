const axios = require("axios");
require("dotenv").config();

const clientId = process.env.IMWEB_CLIENT_ID;
const clientSecret = process.env.IMWEB_CLIENT_SECRET;
const baseImageURL = "https://cdn.imweb.me/upload";
const apiBaseURL = "https://api.imweb.me/v2";

let accessToken = null;

const apiClient = axios.create({
  baseURL: apiBaseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const getAccessToken = async () => {
  try {
    const params = {
      key: clientId,
      secret: clientSecret,
    };

    console.log("Sending request to /auth with params:", params);

    const response = await apiClient.get("/auth", { params });

    console.log("Access Token Response:", response.data);

    if (response.data && response.data.access_token) {
      accessToken = response.data.access_token;
      return accessToken;
    } else {
      throw new Error("Failed to get access token");
    }
  } catch (error) {
    console.error(
      "Error fetching access token:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

const getProducts = async (accessToken) => {
  try {
    const requestConfig = {
      headers: {
        "access-token": `${accessToken}`,
      },
    };

    console.log("Requesting products with access token:", accessToken);
    const response = await apiClient.get("/shop/products", requestConfig);

    console.log("Products Response:", response.data);

    if (response.data && response.data.data && response.data.data.list) {
      return response.data.data.list.map((product) => ({
        image: `${baseImageURL}/${product.image_url[product.images[0]]}`,
        title: product.name,
        description: product.simple_content,
        artist: product.origin,
      }));
    } else {
      throw new Error("Invalid product response structure");
    }
  } catch (error) {
    console.error(
      "Error fetching products:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

const fetchProducts = async (req, res) => {
  try {
    if (!accessToken) {
      await getAccessToken();
    }
    const products = await getProducts(accessToken);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { fetchProducts };
