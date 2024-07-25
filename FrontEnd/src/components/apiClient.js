import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000/api", // 백엔드 API의 기본 URL
  headers: {
    "Content-Type": "application/json",
  },
});
export async function getProducts() {
  try {
    console.log("Sending GET request to /products/fetch-products");
    const response = await apiClient.get("/products/fetch-products");
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export const addToCart = async (userId, productId, quantity) => {
  try {
    const response = await apiClient.post("/cart/add", {
      userId,
      productId,
      quantity,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCartItems = async (userId) => {
  try {
    const response = await apiClient.get(`/cart/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const removeFromCart = async (userId, productId) => {
  try {
    const response = await apiClient.delete("/cart/remove", {
      data: { userId, productId },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createOrder = async (userId, items, totalAmount) => {
  try {
    console.log("Sending POST request to /order/create with data:", {
      userId,
      items,
      totalAmount,
    });
    const response = await apiClient.post("/order/create", {
      userId,
      items,
      totalAmount,
    });
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

export const getOrder = async (orderId) => {
  try {
    console.log(`Sending GET request to /order/${orderId}`);
    const response = await apiClient.get(`/order/${orderId}`);
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching order:", error);
    throw error;
  }
};

export const getOrders = async (userId) => {
  try {
    console.log(`Sending GET request to /order/user/${userId}`);
    const response = await apiClient.get(`/order/user/${userId}`);
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};
