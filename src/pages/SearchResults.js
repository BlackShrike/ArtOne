import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import styles from "../css/SearchResults.module.css"; // Ensure the path is correct
import BackButton from "../components/BackButton";

function SearchResults() {
  const items = Array.from({ length: 50 }).map((_, index) => ({
    id: index,
    title: "제목제목제목",
    description: "컨텐츠내용내용내용",
    price: "120,000원",
  }));

  return (
    <div className={styles["search-results-container"]}>
      <div className={styles["back-link"]}>
        <BackButton />
      </div>
      <div className={styles["results-header"]}>
        <span>0000 검색결과 000건</span>
      </div>
      <div className={styles["grid-container"]}>
        {items.map((item) => (
          <div key={item.id} className={styles["grid-item"]}>
            <div className={styles["image-placeholder"]}></div>
            <div className={styles["item-details"]}>
              <div className={styles["item-title-row"]}>
                <p className={styles["item-title"]}>{item.title}</p>
                <FaShoppingCart className={styles["cart-icon"]} />
              </div>
              <p className={styles["item-description"]}>{item.description}</p>
              <p className={styles["item-price"]}>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles["pagination"]}>
        <button className={styles["page-arrow"]}>{"<"}</button>
        {Array.from({ length: 9 }).map((_, index) => (
          <button key={index} className={styles["page-number"]}>
            {index + 1}
          </button>
        ))}
        <button className={styles["page-arrow"]}>{">"}</button>
      </div>
    </div>
  );
}

export default SearchResults;
