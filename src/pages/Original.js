import React, { useState, useEffect } from "react";
import styles from "../css/Original.module.css"; // Ensure this path is correct based on your project structure
import BackButton from "../components/BackButton"; // Assuming there's a BackButton component
import { TbRefresh } from "react-icons/tb";

function Original() {
  const [filters, setFilters] = useState({
    type: localStorage.getItem("type") || "전체",
    style1: localStorage.getItem("style1") || "",
    style2: localStorage.getItem("style2") || "",
    style3: localStorage.getItem("style3") || "",
    style4: localStorage.getItem("style4") || "",
    price1: localStorage.getItem("price1") || "",
    price2: localStorage.getItem("price2") || "",
    price3: localStorage.getItem("price3") || "",
    price4: localStorage.getItem("price4") || "",
  });

  const itemsPerPage = 30; // 한 페이지당 30개 항목
  const totalItems = 300; // 총 항목 수
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    localStorage.setItem("type", filters.type);
    localStorage.setItem("style1", filters.style1);
    localStorage.setItem("style2", filters.style2);
    localStorage.setItem("style3", filters.style3);
    localStorage.setItem("style4", filters.style4);
    localStorage.setItem("price1", filters.price1);
    localStorage.setItem("price2", filters.price2);
    localStorage.setItem("price3", filters.price3);
    localStorage.setItem("price4", filters.price4);
  }, [filters]);

  const toggleFilter = (category, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: prevFilters[category] === value ? "" : value,
    }));
  };

  const resetFilters = () => {
    setFilters({
      type: "전체",
      style1: "",
      style2: "",
      style3: "",
      style4: "",
      price1: "",
      price2: "",
      price3: "",
      price4: "",
    });
    localStorage.removeItem("type");
    localStorage.removeItem("style1");
    localStorage.removeItem("style2");
    localStorage.removeItem("style3");
    localStorage.removeItem("style4");
    localStorage.removeItem("price1");
    localStorage.removeItem("price2");
    localStorage.removeItem("price3");
    localStorage.removeItem("price4");
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const items = Array.from({ length: totalItems }).slice(
      startIndex,
      startIndex + itemsPerPage
    );

    return items.map((_, index) => (
      <div key={index} className={styles.gridItem}>
        <div className={styles.imagePlaceholder}></div>
        <div className={styles.itemDetails}>
          <p>
            <span className={styles.headtext}>작가명</span>
          </p>
          <p>제작기법 및 사이즈</p>
          <p>제작년도 및 그의 작품 내용들</p>
        </div>
      </div>
    ));
  };

  const renderPagination = () => {
    return (
      <div className={styles.pagination}>
        <span
          className={styles.pageArrow}
          onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
        >
          &lt;
        </span>
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`${styles.pageNumber} ${
              currentPage === index + 1 ? styles.activePageNumber : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </span>
        ))}
        <span
          className={styles.pageArrow}
          onClick={() =>
            handlePageChange(Math.min(totalPages, currentPage + 1))
          }
        >
          &gt;
        </span>
      </div>
    );
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.leftAlign}>
        <button
          className={`${filters.type === "전체" ? styles.active : ""}`}
          onClick={() => setFilters({ ...filters, type: "전체" })}
        >
          전체
        </button>
        <button
          className={` ${filters.type === "원화" ? styles.active : ""}`}
          onClick={() => setFilters({ ...filters, type: "원화" })}
        >
          원화
        </button>
        <button
          className={`${filters.type === "판화" ? styles.active : ""}`}
          onClick={() => setFilters({ ...filters, type: "판화" })}
        >
          판화
        </button>
      </div>
      <BackButton />
      <section className={styles.MiddleBar}>
        <div className={styles.filterHeader}></div>
        <div className={styles.filterBox}>
          <div className={styles.centerAlign}>
            <div className={styles.filterCategory}>
              <button
                className={`${styles.styleButton} ${
                  filters.style1 === "추상" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("style1", "추상")}
              >
                추상
              </button>
              <button
                className={`${styles.styleButton} ${
                  filters.style1 === "인물" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("style1", "인물")}
              >
                인물
              </button>
              <button
                className={`${styles.styleButton} ${
                  filters.style1 === "풍경" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("style1", "풍경")}
              >
                풍경
              </button>
              <button
                className={`${styles.styleButton} ${
                  filters.style1 === "정물" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("style1", "정물")}
              >
                정물
              </button>
              <button
                className={`${styles.styleButton} ${
                  filters.style1 === "동물" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("style1", "동물")}
              >
                동물
              </button>
            </div>
            <div className={styles.filterCategory}>
              <button
                className={`${styles.styleButton} ${
                  filters.style2 === "가로형" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("style2", "가로형")}
              >
                가로형
              </button>
              <button
                className={`${styles.styleButton} ${
                  filters.style2 === "세로형" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("style2", "세로형")}
              >
                세로형
              </button>
              <button
                className={`${styles.styleButton} ${
                  filters.style2 === "정사각형" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("style2", "정사각형")}
              >
                정사각형
              </button>
            </div>
            <div className={styles.filterCategory}>
              <button
                className={`${styles.priceButton} ${
                  filters.price1 === "10호 미만" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("price1", "10호 미만")}
              >
                10호 미만
              </button>
              <button
                className={`${styles.priceButton} ${
                  filters.price1 === "30호 미만" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("price1", "30호 미만")}
              >
                30호 미만
              </button>
              <button
                className={`${styles.priceButton} ${
                  filters.price1 === "50호 미만" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("price1", "50호 미만")}
              >
                50호 미만
              </button>
              <button
                className={`${styles.priceButton} ${
                  filters.price1 === "70호 미만" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("price1", "70호 미만")}
              >
                70호 미만
              </button>
              <button
                className={`${styles.priceButton} ${
                  filters.price1 === "100호 이상" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("price1", "100호 이상")}
              >
                100호 이상
              </button>
            </div>
            <div className={styles.filterCategory}>
              <button
                className={`${styles.priceButton} ${
                  filters.price2 === "50만원 미만" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("price2", "50만원 미만")}
              >
                50만원 미만
              </button>
              <button
                className={`${styles.priceButton} ${
                  filters.price2 === "80만원 미만" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("price2", "80만원 미만")}
              >
                80만원 미만
              </button>
              <button
                className={`${styles.priceButton} ${
                  filters.price2 === "100만원 미만" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("price2", "100만원 미만")}
              >
                100만원 미만
              </button>
              <button
                className={`${styles.priceButton} ${
                  filters.price2 === "150만원 미만" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("price2", "150만원 미만")}
              >
                150만원 미만
              </button>
              <button
                className={`${styles.priceButton} ${
                  filters.price2 === "150만원 이상" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("price2", "150만원 이상")}
              >
                150만원 이상
              </button>
            </div>
          </div>
          <div className={styles.recentKeywords}>
            {filters.style1 && (
              <span className={styles.keywordTag}>{filters.style1}</span>
            )}
            {filters.style2 && (
              <span className={styles.keywordTag}>{filters.style2}</span>
            )}
            {filters.style3 && (
              <span className={styles.keywordTag}>{filters.style3}</span>
            )}
            {filters.style4 && (
              <span className={styles.keywordTag}>{filters.style4}</span>
            )}
            {filters.price1 && (
              <span className={styles.keywordTag}>{filters.price1}</span>
            )}
            {filters.price2 && (
              <span className={styles.keywordTag}>{filters.price2}</span>
            )}
            {filters.price3 && (
              <span className={styles.keywordTag}>{filters.price3}</span>
            )}
            {filters.price4 && (
              <span className={styles.keywordTag}>{filters.price4}</span>
            )}
            <button className={styles.resetButton} onClick={resetFilters}>
              <TbRefresh />
            </button>
          </div>
        </div>
      </section>
      <section className={styles.gridPage}>
        <div className={styles.gridContainer}>{renderItems()}</div>
        {renderPagination()}
      </section>
    </div>
  );
}

export default Original;
