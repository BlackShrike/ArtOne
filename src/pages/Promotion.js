import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Promotion.module.css"; // Ensure the path is correct
import BackButton from "../components/BackButton";

function Promotion(props) {
  return (
    <div className={styles.gridPage}>
      <BackButton />
      <div className={styles.gridContainer}>
        {Array.from({ length: 8 }).map((_, index) => (
          <Link
            key={index}
            to={`/promotion/${index + 1}`}
            className={styles.gridItem}
          >
            <div className={styles.imagePlaceholder}></div>
            <div className={styles.itemDetails}>
              <p>
                <span className={styles.headtext}>프로모션 명</span>
              </p>
              <p>프로모션 내용프로모션 내용프로모션 내용프로모션 내용</p>
              <p>프로모션 내용프로모션 내용프로모션 내용프로모션 내용</p>
              <p>05. 2024</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Promotion;
