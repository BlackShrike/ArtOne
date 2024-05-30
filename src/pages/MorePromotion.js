import React from "react";
import styles from "../css/MorePromotion.module.css"; // Ensure the path is correct
import BackButton from "../components/BackButton";
function MorePromotion(props) {
  return (
    <div className={styles.gridPage}>
      <BackButton />
      <div className={styles.gridContainer}>
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className={styles.gridItem}>
            <div className={styles.imagePlaceholder}></div>
            <div className={styles.itemDetails}>
              <p>
                <span className={styles.headtext}>프로모션 명</span>
              </p>
              <p>프로모션 내용프로모션 내용프로모션 내용프로모션 내용</p>
              <p>프로모션 내용프로모션 내용프로모션 내용프로모션 내용</p>
              <p>05. 2024</p>
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

export default MorePromotion;
