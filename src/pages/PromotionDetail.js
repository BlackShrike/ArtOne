//PromotionDetail.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../css/PromotionDetail.module.css";
import BackButton from "../components/BackButton";
import { FaCartPlus } from "react-icons/fa";
import { useLanguage } from "../components/LanguageContext";

const translations = {
  KR: {
    promotionName: "프로모션 명",
    productTitle: "제품 제목",
    description: "설명설명설명설명",
    price: "120,000원",
  },
  EN: {
    promotionName: "Promotion Name",
    productTitle: "Product Title",
    description: "Description Description Description Description",
    price: "$120.00",
  },
};

function PromotionDetail() {
  const { language } = useLanguage();
  const t = translations[language];
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = 20; // 총 아이템 수
  const totalPages = Math.ceil(totalItems / itemsPerPage);

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
    <div className={styles.detailPage}>
      <BackButton />
      <h2 className={styles.title}>{`${t.promotionName} ${id}`}</h2>
      <div className={styles.imagePlaceholder}></div>
      <div className={styles.itemsContainer}>
        {Array.from({ length: itemsPerPage }).map((_, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.itemImagePlaceholder}></div>
            <div className={styles.itemDetails}>
              <p className={styles.priceCart}>
                <span>{`${t.productTitle} ${index + 1}`}</span>
                <FaCartPlus />
              </p>
              <p>{t.description}</p>
              <p>
                <span>{t.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      {renderPagination()}
    </div>
  );
}

export default PromotionDetail;
