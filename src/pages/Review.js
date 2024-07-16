//Review.js
import React, { useState } from "react";
import styles from "../css/Review.module.css";
import BackButton from "../components/BackButton";
import { useLanguage } from "../components/LanguageContext";

const translations = {
  KR: {
    title: "컬렉터 후기",
    searchLabel: "상품 리뷰 검색",
    searchPlaceholder: "궁금하신 상품을 검색해보세요",
    searchButton: "검색",
    reviewTitle: "너무 좋아요!",
    reviewDescription:
      "디자인이 좋아서 구매했어요. 색감도 예쁘고 마음에 들어요!",
    author: "유저명",
    comments: "댓글",
  },
  EN: {
    title: "Collector Reviews",
    searchLabel: "Search Product Reviews",
    searchPlaceholder: "Search for the product you are curious about",
    searchButton: "Search",
    reviewTitle: "Love it!",
    reviewDescription:
      "Bought it because of the design. The colors are pretty and I like it!",
    author: "User",
    comments: "Comments",
  },
};

const reviews = Array.from({ length: 20 }).map((_, index) => ({
  title: "너무 좋아요!",
  description: "디자인이 좋아서 구매했어요. 색감도 예쁘고 마음에 들어요!",
  author: "유저명",
  comments: 2,
}));

function Review() {
  const { language } = useLanguage();
  const t = translations[language];
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const itemsPerPage = 50;
  const totalItems = 200;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className={styles.reviewPage}>
      <BackButton />
      <div className={styles.header}>
        <h1 className={styles.title}>{t.title}</h1>
        <div className={styles.headerDivider}></div>
        <div className={styles.searchContainer}>
          <span className={styles.searchLabel}>{t.searchLabel}</span>
          <input
            type="text"
            className={styles.searchInput}
            placeholder={t.searchPlaceholder}
          />
          <button className={styles.searchButton}>{t.searchButton}</button>
        </div>
      </div>
      <div className={styles.gridContainer}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.gridItem}>
            <div className={styles.imagePlaceholder}></div>
            <div className={styles.itemDetails}>
              <h3>{t.reviewTitle}</h3>
              <p>{t.reviewDescription}</p>
              <div className={styles.ItemContent}>
                <p>{t.author}</p>
                <p>{`${t.comments} ${review.comments}`}</p>
              </div>
            </div>
            <div className={styles.additionalData}>
              <div className={styles.additionalImagePlaceholder}></div>
              <p className={styles.additionalText}>{t.reviewDescription}</p>
            </div>
          </div>
        ))}
      </div>

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
    </div>
  );
}

export default Review;
