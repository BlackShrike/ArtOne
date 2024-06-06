import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "../css/Promotion.module.css";
import BackButton from "../components/BackButton";
import PromotionDetail from "./PromotionDetail";

function Promotion() {
  const { id } = useParams();

  if (id) {
    return <PromotionDetail />;
  }

  return (
    <div className={styles.gridPage}>
      <BackButton />
      <div className={styles.gridContainer}>
        {Array.from({ length: 20 }).map((_, index) => (
          <Link
            key={index}
            to={`/Promotion/${index + 1}`}
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
