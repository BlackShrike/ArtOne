import axios from "axios";

const clientId = "e1cb5da70827d8e06a60e291279a0b1547f7628bec";
const clientSecret = "17bd397f1e711b4899a990";
const apiBaseURL = "/api/v2"; // 프록시를 통해 API 엔드포인트로 라우팅

const baseImageURL = "https://cdn.imweb.me/upload";

const apiClient = axios.create({
  baseURL: apiBaseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

let accessToken = null;

export async function getAccessToken() {
  try {
    const params = {
      key: clientId,
      secret: clientSecret,
    };

    console.log("Sending request to /auth with params:", params);

    const response = await apiClient.get("/auth", { params });

    console.log("Request Details:");
    console.log("URL: ", apiClient.defaults.baseURL + "/auth");
    console.log("Params: ", params);

    console.log("Access Token Response:", response.data);

    accessToken = response.data.access_token;
    return accessToken;
  } catch (error) {
    console.error(
      "Error fetching access token:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
}

export function setAccessToken(token) {
  accessToken = token;
}

export async function getProducts() {
  try {
    if (!accessToken) {
      await getAccessToken();
    }
    const requestConfig = {
      headers: {
        "access-token": `${accessToken}`,
      },
    };
    const response = await apiClient.get("/shop/products", requestConfig);

    console.log("Request Details:");
    console.log("URL: ", apiClient.defaults.baseURL + "/shop/products");
    console.log("Headers: ", requestConfig.headers);

    console.log("Products Response:", response.data);
    return response.data.data.list.map((product) => ({
      image: `${baseImageURL}/${product.image_url[product.images[0]]}`,
      title: product.name,
      description: product.simple_content,
      artist: product.origin,
    }));
  } catch (error) {
    console.error(
      "Error fetching products:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
}
