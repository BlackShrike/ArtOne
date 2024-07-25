//Promotion.js
import React, { useState } from "react";
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalItems = 80; // 총 아이템 수
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (id) {
    return <PromotionDetail />;
  }

  const handleNavigation = (index) => {
    navigate(`/Promotion/${index + 1}`);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    return (
      <div className={styles.pagination}>
        <button
          className={styles.pageArrow}
          onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`${styles.pageNumber} ${
              currentPage === index + 1 ? styles.activePage : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className={styles.pageArrow}
          onClick={() =>
            handlePageChange(Math.min(totalPages, currentPage + 1))
          }
          disabled={currentPage === totalPages}
        >
          {">"}
        </button>
      </div>
    );
  };

  return (
    <div className={styles.gridPage}>
      <BackButton />
      <div className={styles.gridContainer}>
        {Array.from({ length: itemsPerPage }).map((_, index) => (
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
      {renderPagination()}
    </div>
  );
}

export default Promotion;
