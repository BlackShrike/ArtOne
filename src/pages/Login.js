// Login.js
import React, { useState } from "react";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "../css/Login.module.css";
import BackButton from "../components/BackButton";
import { useLanguage } from "../components/LanguageContext";
import { useUser } from "../components/UserContext";
import axios from "axios";

const translations = {
  KR: {
    loginHeader: "LOGIN",
    usernamePlaceholder: "아이디",
    passwordPlaceholder: "비밀번호",
    rememberMe: "아이디 저장",
    loginButton: "로그인",
    findAccount: "아이디 비밀번호 찾기",
    signUp: "회원가입",
    socialLogin: "소셜 로그인",
    kakao: "카카오로 시작하기",
    naver: "네이버로 시작하기",
    google: "구글로 시작하기",
    loginFailed: "로그인에 실패했습니다. 다시 시도해주세요.",
  },
  EN: {
    loginHeader: "LOGIN",
    usernamePlaceholder: "Username",
    passwordPlaceholder: "Password",
    rememberMe: "Remember Me",
    loginButton: "Login",
    findAccount: "Find ID/Password",
    signUp: "Sign Up",
    socialLogin: "Social Login",
    kakao: "Continue with Kakao",
    naver: "Continue with Naver",
    google: "Continue with Google",
    loginFailed: "Login failed. Please try again.",
  },
};

function Login() {
  const [remember, setRemember] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { setUser } = useUser();
  const t = translations[language];

  const toggleRemember = () => {
    setRemember(!remember);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          username,
          password,
        }
      );
      if (response.data.token) {
        localStorage.setItem("access_token", response.data.token);
        setUser(response.data.user);
        navigate("/mypage");
      } else {
        setError(t.loginFailed);
      }
    } catch (error) {
      console.error(error);
      setError(t.loginFailed);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <BackButton />
      <h2>{t.loginHeader}</h2>
      {error && <div className={styles.error}>{error}</div>}
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={t.usernamePlaceholder}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder={t.passwordPlaceholder}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className={styles.rememberMe} onClick={toggleRemember}>
          {remember ? (
            <FaCheckCircle className={styles.checkboxIcon} />
          ) : (
            <FaRegCircle className={styles.checkboxIcon} />
          )}
          <label htmlFor="remember">{t.rememberMe}</label>
        </div>
        <button type="submit" className={styles.loginButton}>
          {t.loginButton}
        </button>
        <div className={styles.links}>
          <span onClick={() => navigate("/FindAccount")}>{t.findAccount}</span>
          <span onClick={() => navigate("/signup")}>{t.signUp}</span>
        </div>
      </form>
      <div className={styles.socialLogin}>
        <button className={styles.kakao}>{t.kakao}</button>
        <button className={styles.naver}>{t.naver}</button>
        <button className={styles.google}>{t.google}</button>
      </div>
    </div>
  );
}

export default Login;
