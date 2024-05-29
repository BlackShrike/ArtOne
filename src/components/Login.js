import React, { useState } from "react";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "../css/Login.module.css"; // Ensure the path is correct

function Login({ onLogin }) {
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

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
      <div className={styles.backLink}>
        <a href="/">← 뒤로가기</a>
      </div>
      <h2>LOGIN</h2>
      <form className={styles.loginForm}>
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <div className={styles.rememberMe} onClick={toggleRemember}>
          {remember ? (
            <FaCheckCircle className={styles.checkboxIcon} />
          ) : (
            <FaRegCircle className={styles.checkboxIcon} />
          )}
          <label htmlFor="remember">아이디 저장</label>
        </div>
        <button type="submit" className={styles.loginButton}>
          로그인
        </button>
        <div className={styles.links}>
          <a href="/FindAccount">아이디 비밀번호 찾기</a>
          <a href="/">회원가입</a>
        </div>
      </form>
      <div className={styles.socialLogin}>
        <button className={styles.kakao}>카카오로 시작하기</button>
        <button className={styles.naver}>네이버로 시작하기</button>
        <button className={styles.google}>구글로 시작하기</button>
      </div>
    </div>
  );
}

export default Login;
