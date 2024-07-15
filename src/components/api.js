// src/api.js
import axios from "axios";

// Axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: "https://api.imweb.me/v2",
  headers: {
    "Content-Type": "application/json",
  },
});

// 엑세스 토큰 가져오기 함수
const getAccessToken = async () => {
  const response = await axios.post("https://api.imweb.me/v2/auth", {
    key: process.env.REACT_APP_API_KEY,
    secret: process.env.REACT_APP_API_SECRET,
  });
  return response.data.access_token;
};

// 요청 인터셉터 설정
apiClient.interceptors.request.use(
  async (config) => {
    const token = await getAccessToken();
    config.headers["access-token"] = token;
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;
