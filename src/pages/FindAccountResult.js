import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/FindAccountResult.module.css"; // Ensure the path is correct
import BackButton from "../components/BackButton";
function FindAccountResult({ type }) {
  return (
    <div className={styles.findAccountResultContainer}>
      <BackButton />
      <h2>홍길동님 {type === "id" ? "아이디" : "비밀번호"}</h2>
      <div className={styles.result}>
        {type === "id" ? (
          <>
            <p>sampleIDsampleID</p>
            <p>sampleIDsampleID2</p>
          </>
        ) : (
          <>
            <p>새로운 비밀번호를 이메일로 발송하였습니다.</p>
          </>
        )}
      </div>
      <div className={styles.actions}>
        <Link to="/login" className={styles.actionButton}>
          로그인 하기
        </Link>
        {type === "id" && (
          <Link to="/find-account" className={styles.actionButton}>
            비밀번호찾기
          </Link>
        )}
      </div>
    </div>
  );
}

export default FindAccountResult;
