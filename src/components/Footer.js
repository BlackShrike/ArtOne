import React from "react";
import styles from "../css/Footer.module.css";

function Footer(props) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}>
        <span>©ARTKO</span>
      </div>
      <div className={styles.footerInfo}>
        <p>
          contemporaryk | 대표자명: 박준호 | 사업자번호: 446-33-01334 |
          통신판매신고번호: 제 2024-인천연수구-1067 호 (사업자 정보 확인) |
          이메일 문의: contemporaryk@naver.com
        </p>
        <p>
          주소: 인천광역시 연수구 인천타워대로 323, A동 31층 더블유케이 35호 |
          대표번호: 010-3022-2689 | 개인정보보호방침 | 이용약관
        </p>
      </div>
    </footer>
  );
}

export default Footer;
