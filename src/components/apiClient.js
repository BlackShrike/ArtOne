import axios from "axios";

const clientId = "e1cb5da70827d8e06a60e291279a0b1547f7628bec";
const clientSecret = "17bd397f1e711b4899a990";

const apiClient = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

let accessToken = null;

export async function getAccessToken() {
  try {
    console.log("Sending request to /api/auth with payload:", {
      key: clientId,
      secret: clientSecret,
    });
    const response = await apiClient.post("/auth", {
      key: clientId,
      secret: clientSecret,
    });
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

export async function signUp(payload) {
  try {
    if (!accessToken) {
      await getAccessToken();
    }
    console.log("Payload for sign up:", payload);
    const response = await apiClient.post("/member/member", payload, {
      headers: {
        "access-token": `${accessToken}`,
      },
    });
    console.log("Sign Up Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error during sign up:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
}
export async function login({ username, password }) {
  try {
    if (!accessToken) {
      await getAccessToken();
    }
    console.log("Username for login check:", username);
    const userResponse = await apiClient.get(`/member/members/${username}`, {
      headers: {
        "access-token": `${accessToken}`,
      },
    });
    console.log("User Info Response:", userResponse.data);

    if (userResponse.data) {
      // Assuming the user data contains a field 'pass' for password
      const user = userResponse.data;
      if (user.pass === password) {
        console.log("Login successful!");
        return {
          code: 200,
          msg: "Login successful",
          access_token: accessToken,
        };
      } else {
        console.log("Invalid password");
        return { code: -1, msg: "Invalid password" };
      }
    } else {
      console.log("User not found");
      return { code: -1, msg: "User not found" };
    }
  } catch (error) {
    console.error(
      "Error during login:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
}

export async function checkUsernameAvailability(username) {
  try {
    if (!accessToken) {
      await getAccessToken();
    }
    console.log("Username for availability check:", username);
    const response = await apiClient.get(`/member/members/${username}`, {
      headers: {
        "access-token": `${accessToken}`,
      },
    });
    console.log("Username Availability Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error checking username availability:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
}
export async function getProducts() {
  try {
    if (!accessToken) {
      await getAccessToken();
    }
    const response = await apiClient.get("/shop/products", {
      headers: {
        "access-token": `${accessToken}`,
      },
    });
    console.log("Products Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching products:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
}
