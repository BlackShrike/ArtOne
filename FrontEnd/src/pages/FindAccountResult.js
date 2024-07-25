//FindAccountResult.js
import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/FindAccountResult.module.css"; // Ensure the path is correct
import BackButton from "../components/BackButton";
import { useLanguage } from "../components/LanguageContext";

const translations = {
  KR: {
    resultHeader: "홍길동",
    idResult: "님 아이디",
    passwordResult: "비밀번호",
    idList: ["sampleIDsampleID", "sampleIDsampleID2"],
    emailSent: "새로운 비밀번호를 이메일로 발송하였습니다.",
    login: "로그인 하기",
    findPassword: "비밀번호찾기",
  },
  EN: {
    resultHeader: "Dear User",
    idResult: "ID",
    passwordResult: "Password",
    idList: ["sampleIDsampleID", "sampleIDsampleID2"],
    emailSent: "A new password has been sent to your email.",
    login: "Login",
    findPassword: "Find Password",
  },
};

function FindAccountResult({ type }) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className={styles.findAccountResultContainer}>
      <BackButton />
      <h2>
        {t.resultHeader} <p>{type === "id" ? t.idResult : t.passwordResult}</p>
      </h2>
      <div className={styles.result}>
        {type === "id" ? (
          t.idList.map((id, index) => <p key={index}>{id}</p>)
        ) : (
          <p>{t.emailSent}</p>
        )}
      </div>
      <div className={styles.actions}>
        <Link to="/login" className={styles.actionButton}>
          {t.login}
        </Link>
        {type === "id" && (
          <Link to="/find-account" className={styles.actionButton}>
            {t.findPassword}
          </Link>
        )}
      </div>
    </div>
  );
}

export default FindAccountResult;
