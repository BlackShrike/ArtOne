import React from "react";
import { useParams } from "react-router-dom";
import styles from "../css/PromotionDetail.module.css";
import BackButton from "../components/BackButton";
import { FaCartPlus } from "react-icons/fa";

function PromotionDetail() {
  const { id } = useParams();

  return (
    <div className={styles.detailPage}>
      <BackButton />
      <h2 className={styles.title}>프로모션 명 {id}</h2>
      <div className={styles.imagePlaceholder}></div>
      <div className={styles.itemsContainer}>
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.itemImagePlaceholder}></div>
            <div className={styles.itemDetails}>
              <p className={styles.priceCart}>
                <span>제품 제목 {index + 1}</span>
                <FaCartPlus />
              </p>
              <p>설명설명설명설명</p>
              <p>
                <span>120,000원</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PromotionDetail;
