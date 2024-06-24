import React from "react";
import styles from "../css/Business.module.css"; // Ensure the path is correct
import BackButton from "../components/BackButton";
import { FaCartPlus } from "react-icons/fa";
import { useLanguage } from "../components/LanguageContext";

const translations = {
  KR: {
    header: "기업 선물 제안",
    subHeader: "기업 및 사업장등 대량 주문 생산이 가능합니다.",
    contact: "문의: contemporaryk@naver.com",
    title: "제목",
    description: "작품 설명내용작품 설명내용작품 설명내용작품 설명내용",
    price: "10,000,000원",
  },
  EN: {
    header: "Corporate Gift Suggestions",
    subHeader:
      "Bulk orders and production for companies and businesses are possible.",
    contact: "Inquiries: contemporaryk@naver.com",
    title: "Title",
    description:
      "Artwork description content, artwork description content, artwork description content",
    price: "$10,000.00",
  },
};

function Business() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className={styles.gridPage}>
      <BackButton />
      <div className={styles.header}>
        <h1>{t.header}</h1>
        <p>{t.subHeader}</p>
        <p>{t.contact}</p>
      </div>
      <div className={styles.gridContainer}>
        {Array.from({ length: 30 }).map((_, index) => (
          <div key={index} className={styles.gridItem}>
            <div className={styles.imagePlaceholder}></div>
            <div className={styles.itemDetails}>
              <p className={styles.priceCart}>
                <span className={styles.headtext}>
                  {t.title} <FaCartPlus className={styles.faCartPlusIcon} />
                </span>
              </p>
              <p>{t.description}</p>
              <p>{t.description}</p>
              <p>{t.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        <button className={styles.pageArrow}>{"<"}</button>
        {Array.from({ length: 9 }).map((_, index) => (
          <button key={index} className={styles.pageNumber}>
            {index + 1}
          </button>
        ))}
        <button className={styles.pageArrow}>{">"}</button>
      </div>
    </div>
  );
}

export default Business;
