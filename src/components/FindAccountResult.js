import React from "react";
import { Link } from "react-router-dom";
import "../css/FindAccountResult.css"; // Ensure the path is correct

function FindAccountResult({ type }) {
  return (
    <div className="find-account-result-container">
      <div className="back-link">
        <a href="/">← 뒤로가기</a>
      </div>
      <h2>홍길동님 {type === "id" ? "아이디" : "비밀번호"}</h2>
      <div className="result">
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
      <div className="actions">
        <Link to="/login" className="action-button">
          로그인 하기
        </Link>
        {type === "id" && (
          <Link to="/find-account" className="action-button">
            비밀번호찾기
          </Link>
        )}
      </div>
    </div>
  );
}

export default FindAccountResult;
