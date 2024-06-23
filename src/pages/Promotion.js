import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../css/Promotion.module.css";
import BackButton from "../components/BackButton";
import PromotionDetail from "./PromotionDetail";
import { useLanguage } from "../components/LanguageContext";

const translations = {
  KR: {
    promotionName: "프로모션 명",
    promotionContent: "프로모션 내용프로모션 내용프로모션 내용프로모션 내용",
    date: "05. 2024",
  },
  EN: {
    promotionName: "Promotion Name",
    promotionContent:
      "Promotion content Promotion content Promotion content Promotion content",
    date: "May 2024",
  },
};

function Promotion() {
  const { language } = useLanguage();
  const t = translations[language];
  const { id } = useParams();
  const navigate = useNavigate();

  if (id) {
    return <PromotionDetail />;
  }

  const handleNavigation = (index) => {
    navigate(`/Promotion/${index + 1}`);
  };

  return (
    <div className={styles.gridPage}>
      <BackButton />
      <div className={styles.gridContainer}>
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            onClick={() => handleNavigation(index)}
            className={styles.gridItem}
          >
            <div className={styles.imagePlaceholder}></div>
            <div className={styles.itemDetails}>
              <p>
                <span className={styles.headtext}>{t.promotionName}</span>
              </p>
              <p>{t.promotionContent}</p>
              <p>{t.promotionContent}</p>
              <p>{t.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Promotion;
