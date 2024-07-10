import React, { useState, useEffect } from "react";
import styles from "../css/Signup.module.css"; // Ensure the path is correct
import BackButton from "../components/BackButton";
import { useLanguage } from "../components/LanguageContext";
import apiClient from "../components/api"; // apiClient import 추가

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

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    name: "",
    phoneNumberPart1: "",
    phoneNumberPart2: "",
    phoneNumberPart3: "",
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    address: "",
    roadAddress: "",
    zonecode: "",
    roadAddressDetail: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const phoneNumber = `${formData.phoneNumberPart1}-${formData.phoneNumberPart2}-${formData.phoneNumberPart3}`;
    const birthday = `${formData.birthYear}-${formData.birthMonth}-${formData.birthDay}`;

    const payload = {
      member_id: formData.username,
      member_password: formData.password,
      email: formData.email,
      name: formData.name,
      address: formData.roadAddress,
      address_detail: formData.roadAddressDetail,
      birthday: birthday,
      cellphone: phoneNumber,
      zip_code: formData.zonecode,
    };

    try {
      const response = await apiClient.post("/admin/customers", payload);
      console.log(response.data);
      alert("회원가입 성공!");
    } catch (error) {
      console.error(error);
      alert("회원가입 실패!");
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const onClickSearch = () => {
    new window.daum.Postcode({
      oncomplete: function (data) {
        setFormData((prevData) => ({
          ...prevData,
          zonecode: data.zonecode,
          roadAddress: data.address,
        }));
      },
    }).open();
  };

  return (
    <div className={styles.signupContainer}>
      <BackButton />
      <h2>{t.signup}</h2>
      <form className={styles.signupForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="username">{t.username}</label>
          <input type="text" id="username" required onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">{t.password}</label>
          <input
            type="password"
            id="password"
            required
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword">{t.confirmPassword}</label>
          <input
            type="password"
            id="confirmPassword"
            required
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">{t.email}</label>
          <input type="email" id="email" required onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="name">{t.name}</label>
          <input type="text" id="name" required onChange={handleChange} />
        </div>
        <div className={`${styles.formGroup} ${styles.phoneInput}`}>
          <label>{t.phoneNumber}</label>
          <input
            type="text"
            id="phoneNumberPart1"
            placeholder="010"
            maxLength="3"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            id="phoneNumberPart2"
            placeholder="1234"
            maxLength="4"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            id="phoneNumberPart3"
            placeholder="5678"
            maxLength="4"
            required
            onChange={handleChange}
          />
        </div>
        <div className={`${styles.formGroup} ${styles.birthdateInput}`}>
          <label>{t.birthdate}</label>
          <input
            type="text"
            id="birthYear"
            placeholder={t.year}
            maxLength="4"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            id="birthMonth"
            placeholder={t.month}
            maxLength="2"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            id="birthDay"
            placeholder={t.day}
            maxLength="2"
            required
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="address">{t.address}</label>
          <div className={styles.addressSearchContainer}>
            <input type="text" value={formData.zonecode} readOnly />
            <button
              type="button"
              className={styles.addressSearchButton}
              onClick={onClickSearch}
            >
              {t.addressSearch}
            </button>
          </div>
          <input type="text" value={formData.roadAddress} readOnly />
          <input
            type="text"
            id="roadAddressDetail"
            value={formData.roadAddressDetail}
            onChange={handleChange}
            placeholder="상세 주소를 입력해주세요"
          />
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
