import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import styles from "../css/SearchResults.module.css"; // Ensure the path is correct
import BackButton from "../components/BackButton";
import { useLanguage } from "../components/LanguageContext";

const translations = {
  KR: {
    results: "검색결과",
    title: "제목",
    description: "컨텐츠내용내용내용",
    price: "120,000원",
  },
  EN: {
    results: "Search Results",
    title: "Title",
    description: "Content Description",
    price: "$120.00",
  },
};

function SearchResults() {
  const { language } = useLanguage();
  const t = translations[language];
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const { user } = useUser();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        // 여기서 쿼리로 필터링할 수 있습니다.
        const filteredData = data.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        );
        setItems(filteredData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [query]);

  const handleAddToCart = async (item) => {
    if (!user) {
      alert("로그인이 필요합니다.");
      return;
    }
    try {
      await addToCart(user.id, item.id, 1);
      alert("Item added to cart!");
    } catch (error) {
      console.error("Error adding item to cart:", error);
      alert("Failed to add item to cart.");
    }
  };

  return (
    <div className={styles["search-results-container"]}>
      <div className={styles["back-link"]}>
        <BackButton />
      </div>
      <div className={styles["results-header"]}>
        <h2>{`${query}`}</h2>
        <span
          className={styles["results-count"]}
        >{`${t.results} ${items.length}건`}</span>
      </div>
      <div className={styles["grid-container"]}>
        {items.map((item) => (
          <div key={item.id} className={styles["grid-item"]}>
            <div className={styles["image-placeholder"]}></div>
            <div className={styles["item-details"]}>
              <div className={styles["item-title-row"]}>
                <p className={styles["item-title"]}>{item.title}</p>
                <FaShoppingCart
                  className={styles["cart-icon"]}
                  onClick={() => handleAddToCart(item)}
                />
              </div>
              <p className={styles["item-description"]}>{item.description}</p>
              <p className={styles["item-price"]}>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles["pagination"]}>
        <button className={styles["page-arrow"]}>{"<"}</button>
        {Array.from({ length: Math.ceil(items.length / 10) }).map(
          (_, index) => (
            <button key={index} className={styles["page-number"]}>
              {index + 1}
            </button>
          )
        )}
        <button className={styles["page-arrow"]}>{">"}</button>
      </div>
    </div>
  );
}

export default SearchResults;
