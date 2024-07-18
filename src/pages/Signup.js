import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../components/LanguageContext";
// import { signUp, checkUsernameAvailability, login } from "../components/apiClient"; // 회원가입 및 로그인 API 제거
import BackButton from "../components/BackButton";
import styles from "../css/Signup.module.css";

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
    address: "주소",
    addressSearch: "주소 검색",
    year: "년",
    month: "월",
    day: "일",
    term1: "이용 약관 동의 (필수)",
    term2: "개인정보 수집 및 이용 동의 (필수)",
    term3: "마케팅 정보 수신 동의 (선택)",
    smsConsent: "SMS 수신 동의",
    emailConsent: "이메일 수신 동의",
    submit: "회원가입",
    termsText: "이용 약관의 내용이 여기에 표시됩니다.",
    privacyText: "개인정보 수집 및 이용 동의 내용이 여기에 표시됩니다.",
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
    address: "Address",
    addressSearch: "Search Address",
    year: "Year",
    month: "Month",
    day: "Day",
    term1: "Agree to Terms of Service (Required)",
    term2: "Agree to Privacy Policy (Required)",
    term3: "Agree to Receive Marketing Information (Optional)",
    smsConsent: "Agree to Receive SMS",
    emailConsent: "Agree to Receive Emails",
    submit: "Sign Up",
    termsText: "The terms of service will be displayed here.",
    privacyText: "The privacy policy will be displayed here.",
  },
};

function Signup() {
  const { language } = useLanguage();
  const t = translations[language];
  const navigate = useNavigate();

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
    marketing_agree_sms: "N",
    marketing_agree_email: "N",
    third_party_agree: "N",
    send_alarm: "N",
  });

  const [errors, setErrors] = useState({});
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(true);

  const part1Ref = useRef(null);
  const part2Ref = useRef(null);
  const part3Ref = useRef(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handlePhoneNumberChange = (e) => {
    const { id, value } = e.target;
    if (id === "phoneNumberPart1" && value.length === 3) {
      part2Ref.current.focus();
    } else if (id === "phoneNumberPart2" && value.length === 4) {
      part3Ref.current.focus();
    }
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!isUsernameAvailable) {
      newErrors.username = "아이디가 이미 사용 중입니다.";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "유효한 이메일 주소를 입력해주세요.";
    }

    if (
      !/^\d{3}-\d{3,4}-\d{4}$/.test(
        `${formData.phoneNumberPart1}-${formData.phoneNumberPart2}-${formData.phoneNumberPart3}`
      )
    ) {
      newErrors.phoneNumber = "유효한 전화번호를 입력해주세요.";
    }

    if (!formData.name) {
      newErrors.name = "이름을 입력해주세요.";
    }

    if (!formData.roadAddress || !formData.roadAddressDetail) {
      newErrors.address = "주소를 입력해주세요.";
    }

    if (
      !document.getElementById("term1").checked ||
      !document.getElementById("term2").checked
    ) {
      newErrors.terms = "필수 약관에 동의해주세요.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    // 회원가입 및 로그인 API 호출 부분 제거
    try {
      // const response = await signUp(payload);
      // console.log(response);
      // if (response.code === 200) {
      //   alert("회원가입 성공!");
      //   const loginResponse = await login({
      //     username: formData.username,
      //     password: formData.password,
      //   });
      //   console.log(loginResponse);
      //   if (loginResponse.code === 200) {
      //     navigate("/mypage");
      //   } else {
      //     alert("자동 로그인 실패: " + loginResponse.msg);
      //   }
      // } else {
      //   alert("회원가입 실패: " + response.msg);
      // }
    } catch (error) {
      console.error(
        "Error during sign up:",
        error.response ? error.response.data : error.message
      );
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

  // 아이디 중복 체크 API 호출 부분 제거
  const handleUsernameBlur = async () => {
    if (formData.username) {
      try {
        // const response = await checkUsernameAvailability(formData.username);
        // setIsUsernameAvailable(response.code === -10);
        // if (response.code === -10) {
        //   setErrors((prevErrors) => ({
        //     ...prevErrors,
        //     username: "사용 가능한 아이디입니다.",
        //   }));
        // } else {
        //   setErrors((prevErrors) => ({
        //     ...prevErrors,
        //     username: "이미 사용 중인 아이디입니다.",
        //   }));
        // }
      } catch (error) {
        console.error(
          "Error checking username availability:",
          error.response ? error.response.data : error.message
        );
        setIsUsernameAvailable(false);
        setErrors((prevErrors) => ({
          ...prevErrors,
          username: "아이디 중복체크 중 오류가 발생했습니다.",
        }));
      }
    }
  };

  return (
    <div className={styles.signupContainer}>
      <BackButton />
      <h2>{t.signup}</h2>
      <form className={styles.signupForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="username">{t.username}</label>
          <input
            type="text"
            id="username"
            required
            onChange={handleChange}
            onBlur={handleUsernameBlur}
          />
          {errors.username && (
            <span className={styles.error}>{errors.username}</span>
          )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">{t.password}</label>
          <input
            type="password"
            id="password"
            required
            onChange={handleChange}
          />
          {errors.password && (
            <span className={styles.error}>{errors.password}</span>
          )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword">{t.confirmPassword}</label>
          <input
            type="password"
            id="confirmPassword"
            required
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <span className={styles.error}>{errors.confirmPassword}</span>
          )}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">{t.email}</label>
          <input type="email" id="email" required onChange={handleChange} />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="name">{t.name}</label>
          <input type="text" id="name" required onChange={handleChange} />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>
        <div className={`${styles.formGroup} ${styles.phoneInput}`}>
          <label>{t.phoneNumber}</label>
          <input
            type="text"
            id="phoneNumberPart1"
            placeholder="010"
            maxLength="3"
            required
            onChange={handlePhoneNumberChange}
            ref={part1Ref}
          />
          <span className={styles.hyphen}>-</span>
          <input
            type="text"
            id="phoneNumberPart2"
            placeholder="1234"
            maxLength="4"
            required
            onChange={handlePhoneNumberChange}
            ref={part2Ref}
          />
          <span className={styles.hyphen}>-</span>
          <input
            type="text"
            id="phoneNumberPart3"
            placeholder="5678"
            maxLength="4"
            required
            onChange={handlePhoneNumberChange}
            ref={part3Ref}
          />
          {errors.phoneNumber && (
            <span className={styles.error}>{errors.phoneNumber}</span>
          )}
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
          <span className={styles.hyphen}>-</span>
          <input
            type="text"
            id="birthMonth"
            placeholder={t.month}
            maxLength="2"
            required
            onChange={handleChange}
          />
          <span className={styles.hyphen}>-</span>
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
          <div className={styles.addressInputs}>
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
            {errors.address && (
              <span className={styles.error}>{errors.address}</span>
            )}
          </div>
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
              <input
                type="checkbox"
                id="sms"
                onChange={() =>
                  setFormData({
                    ...formData,
                    marketing_agree_sms:
                      formData.marketing_agree_sms === "Y" ? "N" : "Y",
                  })
                }
              />
              <label htmlFor="sms">{t.smsConsent}</label>
            </div>
            <div className={styles.term}>
              <input
                type="checkbox"
                id="emailConsent"
                onChange={() =>
                  setFormData({
                    ...formData,
                    marketing_agree_email:
                      formData.marketing_agree_email === "Y" ? "N" : "Y",
                  })
                }
              />
              <label htmlFor="emailConsent">{t.emailConsent}</label>
            </div>
          </div>
          {errors.terms && <span className={styles.error}>{errors.terms}</span>}
        </div>
        <button
          type="submit"
          className={styles.signupButton}
          onClick={handleSubmit}
        >
          {t.submit}
        </button>
      </form>
    </div>
  );
}

export default Signup;
