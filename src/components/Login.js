import React, { useState } from "react";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "../css/Login.css"; // Ensure the path is correct

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
    <div className="login-container" onSubmit={handleSubmit}>
      <div className="back-link">
        <a href="/">← 뒤로가기</a>
      </div>
      <h2>LOGIN</h2>
      <form className="login-form">
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <div className="remember-me" onClick={toggleRemember}>
          {remember ? (
            <FaCheckCircle className="checkbox-icon" />
          ) : (
            <FaRegCircle className="checkbox-icon" />
          )}
          <label htmlFor="remember">아이디 저장</label>
        </div>
        <button type="submit" className="login-button">
          로그인
        </button>
        <div className="links">
          <a href="/FindAccount">아이디 비밀번호 찾기</a>
          <a href="/">회원가입</a>
        </div>
      </form>
      <div className="social-login">
        <button className="kakao">카카오로 시작하기</button>
        <button className="naver">네이버로 시작하기</button>
        <button className="google">구글로 시작하기</button>
      </div>
    </div>
  );
}

export default Login;
