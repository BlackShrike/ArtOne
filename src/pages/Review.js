import React from "react";
import styles from "../css/Review.module.css";
import BackButton from "../components/BackButton";

const reviews = Array.from({ length: 20 }).map((_, index) => ({
  title: "너무 좋아요!",
  description: "디자인이 좋아서 구매했어요. 색감도 예쁘고 마음에 들어요!",
  rating: 5,
  author: "유저명",
  comments: 2,
}));

function Review() {
  return (
    <div className={styles.reviewPage}>
      <BackButton />
      <div className={styles.header}>
        <h1 className={styles.title}>컬렉터 후기</h1>
        <div className={styles.headerDivider}></div>
        <div className={styles.searchContainer}>
          <span className={styles.searchLabel}>상품 리뷰 검색</span>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="궁금하신 상품을 검색해보세요"
          />
          <button className={styles.searchButton}>검색</button>
        </div>
      </div>
      <div className={styles.gridContainer}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.gridItem}>
            <div className={styles.imagePlaceholder}></div>
            <div className={styles.itemDetails}>
              <h3>{review.title}</h3>
              <p>{review.description}</p>
              <p>⭐️ {review.rating}</p>
              <p>{review.author}</p>
              <p>댓글 {review.comments}</p>
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

export default Review;
