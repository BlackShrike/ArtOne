import React, { useState } from "react";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "../css/FindAccount.module.css"; // Ensure the path is correct
import BackButton from "../components/BackButton";
function FindAccount() {
  const [authMethod, setAuthMethod] = useState("phone");
  const [isFindId, setIsFindId] = useState(true);
  const navigate = useNavigate();

  const toggleAuthMethod = (method) => {
    setAuthMethod(method);
  };

  const toggleFindMode = (mode) => {
    setIsFindId(mode);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFindId) {
      navigate("/find-account-result-id");
    } else {
      navigate("/find-account-result-pw");
    }
  };

  return (
    <div className={styles.findAccountContainer}>
      <BackButton />
      <div className={styles.findTabs}>
        <button
          className={isFindId ? styles.active : ""}
          onClick={() => toggleFindMode(true)}
        >
          아이디찾기
        </button>
        <button
          className={!isFindId ? styles.active : ""}
          onClick={() => toggleFindMode(false)}
        >
          비밀번호찾기
        </button>
      </div>
      <h2>본인확인</h2>
      <div className={styles.authMethods}>
        <div onClick={() => toggleAuthMethod("phone")}>
          {authMethod === "phone" ? (
            <FaCheckCircle className={styles.checkboxIcon} />
          ) : (
            <FaRegCircle className={styles.checkboxIcon} />
          )}
          <label>휴대폰인증</label>
        </div>
        <div onClick={() => toggleAuthMethod("email")}>
          {authMethod === "email" ? (
            <FaCheckCircle className={styles.checkboxIcon} />
          ) : (
            <FaRegCircle className={styles.checkboxIcon} />
          )}
          <label>이메일인증</label>
        </div>
      </div>
      <form className={styles.findForm} onSubmit={handleSubmit}>
        <input type="text" placeholder="이름" required />
        {isFindId ? (
          authMethod === "phone" ? (
            <div className={styles.phoneInput}>
              <input type="text" placeholder="010" maxLength="3" required />
              <input type="text" placeholder="1234" maxLength="4" required />
              <input type="text" placeholder="5678" maxLength="4" required />
            </div>
          ) : (
            <input type="text" placeholder="이메일" required />
          )
        ) : (
          <>
            <input type="text" placeholder="아이디" required />
            {authMethod === "phone" ? (
              <div className={styles.phoneInput}>
                <input type="text" placeholder="010" maxLength="3" required />
                <input type="text" placeholder="1234" maxLength="4" required />
                <input type="text" placeholder="5678" maxLength="4" required />
              </div>
            ) : (
              <input type="text" placeholder="이메일" required />
            )}
          </>
        )}
        <button type="submit" className={styles.confirmButton}>
          확인
        </button>
      </form>
    </div>
  );
}

export default FindAccount;
