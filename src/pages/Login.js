import React, { useState } from "react";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "../css/Login.module.css"; // Ensure the path is correct
import BackButton from "../components/BackButton";
import { useLanguage } from "../components/LanguageContext";

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
  },
};

function Login({ onLogin }) {
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];

  const toggleRemember = () => {
    setRemember(!remember);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin();
    navigate("/mypage");
  };

  return (
    <div className={styles.loginContainer} onSubmit={handleSubmit}>
      <BackButton />
      <h2>{t.loginHeader}</h2>
      <form className={styles.loginForm}>
        <input type="text" placeholder={t.usernamePlaceholder} />
        <input type="password" placeholder={t.passwordPlaceholder} />
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
          <span onClick={() => navigate("/")}>{t.signUp}</span>
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
