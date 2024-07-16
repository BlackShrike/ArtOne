import React, { useState, useEffect } from "react";
import styles from "../css/Footer.module.css";
import { useLanguage } from "./LanguageContext";

const translations = {
  KR: {
    info1:
      "contemporaryk | 대표자명: 박준호 | 사업자번호: 446-33-01334 | 통신판매신고번호: 제 2024-인천연수구-1067 호 (사업자 정보 확인) | 이메일 문의: contemporaryk@naver.com",
    info2:
      "주소: 인천광역시 연수구 인천타워대로 323, A동 31층 더블유케이 35호 | 대표번호: 010-3022-2689 | 개인정보보호방침 | 이용약관",
  },
  EN: {
    info1:
      "contemporaryk | CEO: Junho Park | Business Registration Number: 446-33-01334 | Mail Order Sales Registration Number: 2024-Incheon Yeonsu-1067 (Check Business Info) | Email: contemporaryk@naver.com",
    info2:
      "Address: 31F, WK35, 323, Incheon Tower-daero, Yeonsu-gu, Incheon, Korea | Phone: 010-3022-2689 | Privacy Policy | Terms of Use",
  },
};

function Footer(props) {
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isFlexGrowVisible, setIsFlexGrowVisible] = useState(false);
  const { language } = useLanguage(); // Use language context

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setIsMobile(true);
        setIsInfoVisible(false); // 모바일 화면에서는 숨김
      } else {
        setIsMobile(false);
        setIsInfoVisible(true); // 웹 화면에서는 보임
      }
      // 남은 공간이 있을 때 flexGrow div를 보이게 설정
      const footerHeight = document.querySelector(
        `.${styles.footer}`
      ).offsetHeight;
      const windowHeight = window.innerHeight;
      if (footerHeight < windowHeight) {
        setIsFlexGrowVisible(true);
      } else {
        setIsFlexGrowVisible(false);
      }
    };

    handleResize(); // 초기 실행
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleInfoVisibility = () => {
    if (isMobile) {
      setIsInfoVisible(!isInfoVisible);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerHeader} onClick={toggleInfoVisibility}>
        <span className={styles.footerLogo}>©ARTKO</span>
        {isMobile && (
          <div className={styles.footerToggle}>{isInfoVisible ? "∧" : "∨"}</div>
        )}
      </div>
      <div
        className={`${styles.footerInfo} ${
          isInfoVisible ? styles.visible : ""
        }`}
      >
        <p>{translations[language].info1}</p>
        <p>{translations[language].info2}</p>
      </div>
      {isFlexGrowVisible && <div className={styles.flexGrow}></div>}{" "}
    </footer>
  );
}

export default Footer;
