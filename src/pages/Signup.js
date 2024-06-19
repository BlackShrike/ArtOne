import React from "react";
import styles from "../css/Signup.module.css"; // Ensure the path is correct
import BackButton from "../components/BackButton";
import { useLanguage } from "../components/LanguageContext";

const translations = {
  KR: {
    signup: "회원가입",
    username: "아이디",
    password: "비밀번호",
    confirmPassword: "비밀번호 확인",
    email: "이메일",
    name: "이름",
    phoneNumber: "전화번호",
    birthdate: "생년월일",
    year: "년",
    month: "월",
    day: "일",
    address: "주소",
    addressSearch: "주소검색",
    term1: "[필수] 만 14세 이상입니다.",
    term2: "[필수] 이용약관, 개인정보 수집 및 이용에 모두 동의합니다.",
    term3: "[선택] 개인정보 수집 및 이용 동의",
    termsText: "이용 약관 내용...",
    privacyText: "개인정보 수집 및 이용 동의 내용...",
    smsConsent: "SMS 수신 동의",
    emailConsent: "E-Mail 수신 동의",
    submit: "가입하기",
  },
  EN: {
    signup: "Sign Up",
    username: "Username",
    password: "Password",
    confirmPassword: "Confirm Password",
    email: "Email",
    name: "Name",
    phoneNumber: "Phone Number",
    birthdate: "Birthdate",
    year: "Year",
    month: "Month",
    day: "Day",
    address: "Address",
    addressSearch: "Search Address",
    term1: "[Required] I am over 14 years old.",
    term2:
      "[Required] I agree to the terms of use and the collection and use of personal information.",
    term3:
      "[Optional] I agree to the collection and use of personal information.",
    termsText: "Terms of Use content...",
    privacyText:
      "Consent to collection and use of personal information content...",
    smsConsent: "Agree to receive SMS",
    emailConsent: "Agree to receive E-Mail",
    submit: "Sign Up",
  },
};

function Signup() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className={styles.signupContainer}>
      <BackButton />
      <h2>{t.signup}</h2>
      <form className={styles.signupForm}>
        <div className={styles.formGroup}>
          <label htmlFor="username">{t.username}</label>
          <input type="text" id="username" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">{t.password}</label>
          <input type="password" id="password" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="confirm-password">{t.confirmPassword}</label>
          <input type="password" id="confirm-password" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">{t.email}</label>
          <input type="email" id="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="name">{t.name}</label>
          <input type="text" id="name" required />
        </div>
        <div className={`${styles.formGroup} ${styles.phoneInput}`}>
          <label>{t.phoneNumber}</label>
          <input type="text" placeholder="010" maxLength="3" required />
          <input type="text" placeholder="1234" maxLength="4" required />
          <input type="text" placeholder="5678" maxLength="4" required />
        </div>
        <div className={`${styles.formGroup} ${styles.birthdateInput}`}>
          <label>{t.birthdate}</label>
          <input type="text" placeholder={t.year} maxLength="4" required />
          <input type="text" placeholder={t.month} maxLength="2" required />
          <input type="text" placeholder={t.day} maxLength="2" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="address">{t.address}</label>
          <input type="text" id="address" required />
          <button className={styles.addressSearchButton}>
            {t.addressSearch}
          </button>
        </div>
        <div className={styles.terms}>
          <div className={styles.term}>
            <input type="checkbox" id="term1" required />
            <label htmlFor="term1">{t.term1}</label>
          </div>
          <div className={styles.term}>
            <input type="checkbox" id="term2" required />
            <label htmlFor="term2">{t.term2}</label>
          </div>
          <textarea
            placeholder="이용 약관"
            rows="4"
            disabled
            value={t.termsText}
          ></textarea>
          <div className={styles.term}>
            <input type="checkbox" id="term3" />
            <label htmlFor="term3">{t.term3}</label>
          </div>
          <textarea
            placeholder="개인정보 수집 및 이용 동의"
            rows="4"
            disabled
            value={t.privacyText}
          ></textarea>
          <div className={styles.optionalTerms}>
            <div className={styles.term}>
              <input type="checkbox" id="sms" />
              <label htmlFor="sms">{t.smsConsent}</label>
            </div>
            <div className={styles.term}>
              <input type="checkbox" id="emailConsent" />
              <label htmlFor="emailConsent">{t.emailConsent}</label>
            </div>
          </div>
        </div>
        <button type="submit" className={styles.signupButton}>
          {t.submit}
        </button>
      </form>
    </div>
  );
}

export default Signup;
