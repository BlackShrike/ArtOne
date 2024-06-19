import React from "react";
import styles from "../css/Business.module.css"; // Ensure the path is correct
import BackButton from "../components/BackButton";

function Business() {
  return (
    <div className={styles.gridPage}>
      <BackButton />
      <div className={styles.header}>
        <h1>기업 선물 제안</h1>
        <p>기업 및 사업장등 대량 주문 생산이 가능합니다.</p>
        <p>문의: contemporaryk@naver.com</p>
      </div>
      <div className={styles.gridContainer}>
        {Array.from({ length: 30 }).map((_, index) => (
          <div key={index} className={styles.gridItem}>
            <div className={styles.imagePlaceholder}></div>
            <div className={styles.itemDetails}>
              <p>
                <span className={styles.headtext}>제목</span>
              </p>
              <p>작품 설명내용작품 설명내용작품 설명내용작품 설명내용</p>
              <p>작품 설명내용작품 설명내용작품 설명내용작품 설명내용</p>
              <p>10,000,000원</p>
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
