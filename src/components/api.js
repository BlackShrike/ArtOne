import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://contemporaryk.cafe24api.com/api/v2", // 절대 경로로 설정
  headers: {
    "Content-Type": "application/json",
    "X-Cafe24-Api-Version": "2024-06-01", // API 버전 설정
  },
});

export default apiClient;
