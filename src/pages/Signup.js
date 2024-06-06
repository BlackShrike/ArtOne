import React from "react";
import styles from "../css/Signup.module.css"; // Ensure the path is correct
import BackButton from "../components/BackButton";
function Signup() {
  return (
    <div className={styles.signupContainer}>
      <BackButton />
      <h2>회원가입</h2>
      <form className={styles.signupForm}>
        <div className={styles.formGroup}>
          <label htmlFor="username">아이디</label>
          <input type="text" id="username" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="confirm-password">비밀번호 확인</label>
          <input type="password" id="confirm-password" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">이메일</label>
          <input type="email" id="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="name">이름</label>
          <input type="text" id="name" required />
        </div>
        <div className={`${styles.formGroup} ${styles.phoneInput}`}>
          <label>전화번호</label>
          <input type="text" placeholder="010" maxLength="3" required />
          <input type="text" placeholder="1234" maxLength="4" required />
          <input type="text" placeholder="5678" maxLength="4" required />
        </div>
        <div className={`${styles.formGroup} ${styles.birthdateInput}`}>
          <label>생년월일</label>
          <input type="text" placeholder="년" maxLength="4" required />
          <input type="text" placeholder="월" maxLength="2" required />
          <input type="text" placeholder="일" maxLength="2" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="address">주소</label>
          <input type="text" id="address" required />
          <button className={styles.addressSearchButton}>주소검색</button>
        </div>
        <div className={styles.terms}>
          <div className={styles.term}>
            <input type="checkbox" id="term1" required />
            <label htmlFor="term1">[필수] 만 14세 이상입니다.</label>
          </div>
          <div className={styles.term}>
            <input type="checkbox" id="term2" required />
            <label htmlFor="term2">
              [필수] 이용약관, 개인정보 수집 및 이용에 모두 동의합니다.
            </label>
          </div>
          <textarea
            placeholder="이용 약관"
            rows="4"
            disabled
            value="이용 약관 내용..."
          ></textarea>
          <div className={styles.term}>
            <input type="checkbox" id="term3" />
            <label htmlFor="term3">[선택] 개인정보 수집 및 이용 동의</label>
          </div>
          <textarea
            placeholder="개인정보 수집 및 이용 동의"
            rows="4"
            disabled
            value="개인정보 수집 및 이용 동의 내용..."
          ></textarea>
          <div className={styles.optionalTerms}>
            <div className={styles.term}>
              <input type="checkbox" id="sms" />
              <label htmlFor="sms">SMS 수신 동의</label>
            </div>
            <div className={styles.term}>
              <input type="checkbox" id="email" />
              <label htmlFor="email">E-Mail 수신 동의</label>
            </div>
          </div>
        </div>
        <button type="submit" className={styles.signupButton}>
          가입하기
        </button>
      </form>
    </div>
  );
}

export default Signup;
