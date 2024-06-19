import React, { useState } from "react";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "../css/FindAccount.module.css"; // Ensure the path is correct
import BackButton from "../components/BackButton";
import { useLanguage } from "../components/LanguageContext";

const translations = {
  KR: {
    findId: "아이디찾기",
    findPassword: "비밀번호찾기",
    verification: "본인확인",
    phoneAuth: "휴대폰인증",
    emailAuth: "이메일인증",
    namePlaceholder: "이름",
    phonePlaceholder1: "010",
    phonePlaceholder2: "1234",
    phonePlaceholder3: "5678",
    emailPlaceholder: "이메일",
    idPlaceholder: "아이디",
    confirmButton: "확인",
  },
  EN: {
    findId: "Find ID",
    findPassword: "Find Password",
    verification: "Verification",
    phoneAuth: "Phone Authentication",
    emailAuth: "Email Authentication",
    namePlaceholder: "Name",
    phonePlaceholder1: "010",
    phonePlaceholder2: "1234",
    phonePlaceholder3: "5678",
    emailPlaceholder: "Email",
    idPlaceholder: "ID",
    confirmButton: "Confirm",
  },
};

function FindAccount() {
  const [authMethod, setAuthMethod] = useState("phone");
  const [isFindId, setIsFindId] = useState(true);
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];

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
          {t.findId}
        </button>
        <button
          className={!isFindId ? styles.active : ""}
          onClick={() => toggleFindMode(false)}
        >
          {t.findPassword}
        </button>
      </div>
      <h2>{t.verification}</h2>
      <div className={styles.authMethods}>
        <div onClick={() => toggleAuthMethod("phone")}>
          {authMethod === "phone" ? (
            <FaCheckCircle className={styles.checkboxIcon} />
          ) : (
            <FaRegCircle className={styles.checkboxIcon} />
          )}
          <label>{t.phoneAuth}</label>
        </div>
        <div onClick={() => toggleAuthMethod("email")}>
          {authMethod === "email" ? (
            <FaCheckCircle className={styles.checkboxIcon} />
          ) : (
            <FaRegCircle className={styles.checkboxIcon} />
          )}
          <label>{t.emailAuth}</label>
        </div>
      </div>
      <form className={styles.findForm} onSubmit={handleSubmit}>
        <input type="text" placeholder={t.namePlaceholder} required />
        {isFindId ? (
          authMethod === "phone" ? (
            <div className={styles.phoneInput}>
              <input
                type="text"
                placeholder={t.phonePlaceholder1}
                maxLength="3"
                required
              />
              <input
                type="text"
                placeholder={t.phonePlaceholder2}
                maxLength="4"
                required
              />
              <input
                type="text"
                placeholder={t.phonePlaceholder3}
                maxLength="4"
                required
              />
            </div>
          ) : (
            <input type="text" placeholder={t.emailPlaceholder} required />
          )
        ) : (
          <>
            <input type="text" placeholder={t.idPlaceholder} required />
            {authMethod === "phone" ? (
              <div className={styles.phoneInput}>
                <input
                  type="text"
                  placeholder={t.phonePlaceholder1}
                  maxLength="3"
                  required
                />
                <input
                  type="text"
                  placeholder={t.phonePlaceholder2}
                  maxLength="4"
                  required
                />
                <input
                  type="text"
                  placeholder={t.phonePlaceholder3}
                  maxLength="4"
                  required
                />
              </div>
            ) : (
              <input type="text" placeholder={t.emailPlaceholder} required />
            )}
          </>
        )}
        <button type="submit" className={styles.confirmButton}>
          {t.confirmButton}
        </button>
      </form>
    </div>
  );
}

export default FindAccount;
