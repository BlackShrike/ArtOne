import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000/api", // 백엔드 API의 기본 URL
  headers: {
    "Content-Type": "application/json",
  },
});
export const login = async (username, password) => {
  try {
    const response = await apiClient.post("/auth/login", {
      username,
      password,
    });
    const { accessToken, userId } = response.data;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("userId", userId);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};
export const getProducts = async () => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await apiClient.get("/products", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProduct = async (productId) => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await apiClient.get(`/products/${productId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

export const addToCart = async (userId, productId, quantity) => {
  const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await apiClient.post(
      "/cart/add",
      {
        userId,
        productId,
        quantity,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
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
