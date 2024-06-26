import React, { useState, useEffect } from "react";
import styles from "../css/Original.module.css"; // Ensure this path is correct based on your project structure
import BackButton from "../components/BackButton"; // Assuming there's a BackButton component
import { TbRefresh } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import { useLanguage } from "../components/LanguageContext";

const translations = {
  KR: {
    all: "전체",
    original: "원화",
    print: "판화",
    abstract: "추상",
    portrait: "인물",
    landscape: "풍경",
    stillLife: "정물",
    animal: "동물",
    horizontal: "가로형",
    vertical: "세로형",
    square: "정사각형",
    small: "10호 미만",
    medium: "30호 미만",
    large: "50호 미만",
    xLarge: "70호 미만",
    xxLarge: "100호 이상",
    price1: "50만원 미만",
    price2: "80만원 미만",
    price3: "100만원 미만",
    price4: "150만원 미만",
    price5: "150만원 이상",
    artist: "작가명",
    techniqueSize: "제작기법 및 사이즈",
    yearDescription: "제작년도 및 그의 작품 내용들",
    category: "카테고리",
    type: "작품형태",
    size: "크기",
    price: "가격",
  },
  EN: {
    all: "All",
    original: "Original",
    print: "Print",
    abstract: "Abstract",
    portrait: "Portrait",
    landscape: "Landscape",
    stillLife: "Still Life",
    animal: "Animal",
    horizontal: "Horizontal",
    vertical: "Vertical",
    square: "Square",
    small: "Less than 10",
    medium: "Less than 30",
    large: "Less than 50",
    xLarge: "Less than 70",
    xxLarge: "More than 100",
    price1: "Less than 500,000 KRW",
    price2: "Less than 800,000 KRW",
    price3: "Less than 1,000,000 KRW",
    price4: "Less than 1,500,000 KRW",
    price5: "More than 1,500,000 KRW",
    artist: "Artist",
    techniqueSize: "Technique and Size",
    yearDescription: "Year and Description",
    category: "Category",
    type: "Type",
    size: "Size",
    price: "Price",
  },
};

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

  const { language } = useLanguage();
  const t = translations[language];

  const itemsPerPage = 30; // 한 페이지당 30개 항목
  const totalItems = 300; // 총 항목 수
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const [recentKeywords, setRecentKeywords] = useState(() => {
    const savedKeywords = JSON.parse(localStorage.getItem("recentKeywords"));
    return savedKeywords || [];
  });

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

  useEffect(() => {
    localStorage.setItem("recentKeywords", JSON.stringify(recentKeywords));
  }, [recentKeywords]);

  const toggleFilter = (category, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: prevFilters[category] === value ? "" : value,
    }));

    if (value && !recentKeywords.includes(value)) {
      setRecentKeywords((prevKeywords) => {
        const newKeywords = [value, ...prevKeywords];
        return newKeywords.slice(0, 5); // 최대 5개의 최근 키워드
      });
    }
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

  const removeKeyword = (keyword) => {
    setRecentKeywords((prevKeywords) =>
      prevKeywords.filter((item) => item !== keyword)
    );
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
            <span className={styles.headtext}>{t.artist}</span>
          </p>
          <p>{t.techniqueSize}</p>
          <p>{t.yearDescription}</p>
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

  const [activeTab, setActiveTab] = useState("category");

  return (
    <div className={styles.filterContainer}>
      <div className={styles.leftAlign}>
        <button
          className={`${filters.type === "전체" ? styles.active : ""}`}
          onClick={() => setFilters({ ...filters, type: "전체" })}
        >
          {t.all}
        </button>
        <button
          className={` ${filters.type === "원화" ? styles.active : ""}`}
          onClick={() => setFilters({ ...filters, type: "원화" })}
        >
          {t.original}
        </button>
        <button
          className={`${filters.type === "판화" ? styles.active : ""}`}
          onClick={() => setFilters({ ...filters, type: "판화" })}
        >
          {t.print}
        </button>
      </div>
      <BackButton />
      <section className={`${styles.MiddleBar} ${styles.desktop}`}>
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
                {t.abstract}
              </button>
              <button
                className={`${styles.styleButton} ${
                  filters.style1 === "인물" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("style1", "인물")}
              >
                {t.portrait}
              </button>
              <button
                className={`${styles.styleButton} ${
                  filters.style1 === "풍경" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("style1", "풍경")}
              >
                {t.landscape}
              </button>
              <button
                className={`${styles.styleButton} ${
                  filters.style1 === "정물" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("style1", "정물")}
              >
                {t.stillLife}
              </button>
              <button
                className={`${styles.styleButton} ${
                  filters.style1 === "동물" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("style1", "동물")}
              >
                {t.animal}
              </button>
            </div>
            <div className={styles.filterCategory}>
              <button
                className={`${styles.styleButton} ${
                  filters.style2 === "가로형" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("style2", "가로형")}
              >
                {t.horizontal}
              </button>
              <button
                className={`${styles.styleButton} ${
                  filters.style2 === "세로형" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("style2", "세로형")}
              >
                {t.vertical}
              </button>
              <button
                className={`${styles.styleButton} ${
                  filters.style2 === "정사각형" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("style2", "정사각형")}
              >
                {t.square}
              </button>
            </div>
            <div className={styles.filterCategory}>
              <button
                className={`${styles.priceButton} ${
                  filters.price1 === "10호 미만" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("price1", "10호 미만")}
              >
                {t.small}
              </button>
              <button
                className={`${styles.priceButton} ${
                  filters.price1 === "30호 미만" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("price1", "30호 미만")}
              >
                {t.medium}
              </button>
              <button
                className={`${styles.priceButton} ${
                  filters.price1 === "50호 미만" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("price1", "50호 미만")}
              >
                {t.large}
              </button>
              <button
                className={`${styles.priceButton} ${
                  filters.price1 === "70호 미만" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("price1", "70호 미만")}
              >
                {t.xLarge}
              </button>
              <button
                className={`${styles.priceButton} ${
                  filters.price1 === "100호 이상" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("price1", "100호 이상")}
              >
                {t.xxLarge}
              </button>
            </div>
            <div className={styles.filterCategory}>
              <button
                className={`${styles.priceButton} ${
                  filters.price2 === "50만원 미만" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("price2", "50만원 미만")}
              >
                {t.price1}
              </button>
              <button
                className={`${styles.priceButton} ${
                  filters.price2 === "80만원 미만" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("price2", "80만원 미만")}
              >
                {t.price2}
              </button>
              <button
                className={`${styles.priceButton} ${
                  filters.price2 === "100만원 미만" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("price2", "100만원 미만")}
              >
                {t.price3}
              </button>
              <button
                className={`${styles.priceButton} ${
                  filters.price2 === "150만원 미만" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("price2", "150만원 미만")}
              >
                {t.price4}
              </button>
              <button
                className={`${styles.priceButton} ${
                  filters.price2 === "150만원 이상" ? styles.active : ""
                }
                }`}
                onClick={() => toggleFilter("price2", "150만원 이상")}
              >
                {t.price5}
              </button>
            </div>
          </div>
          <div className={styles.recentKeywords}>
            {recentKeywords.map((keyword, index) => (
              <span key={index} className={styles.keywordTag}>
                {keyword}
                <AiOutlineClose onClick={() => removeKeyword(keyword)} />
              </span>
            ))}
            <button className={styles.resetButton} onClick={resetFilters}>
              <TbRefresh />
            </button>
          </div>
        </div>
      </section>
      <section className={`${styles.MiddleBar} ${styles.mobile}`}>
        <div className={styles.mobileTabs}>
          <button
            className={`${activeTab === "category" ? styles.active : ""}`}
            onClick={() => setActiveTab("category")}
          >
            {t.category}
          </button>
          <button
            className={`${activeTab === "type" ? styles.active : ""}`}
            onClick={() => setActiveTab("type")}
          >
            {t.type}
          </button>
          <button
            className={`${activeTab === "size" ? styles.active : ""}`}
            onClick={() => setActiveTab("size")}
          >
            {t.size}
          </button>
          <button
            className={`${activeTab === "price" ? styles.active : ""}`}
            onClick={() => setActiveTab("price")}
          >
            {t.price}
          </button>
        </div>
        <div className={styles.filterBox}>
          {activeTab === "category" && (
            <div className={styles.centerAlign}>
              <button
                className={`${styles.styleButton} ${
                  filters.style1 === "추상" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("style1", "추상")}
              >
                {t.abstract}
              </button>
              <button
                className={`${styles.styleButton} ${
                  filters.style1 === "인물" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("style1", "인물")}
              >
                {t.portrait}
              </button>
              <button
                className={`${styles.styleButton} ${
                  filters.style1 === "풍경" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("style1", "풍경")}
              >
                {t.landscape}
              </button>
              <button
                className={`${styles.styleButton} ${
                  filters.style1 === "정물" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("style1", "정물")}
              >
                {t.stillLife}
              </button>
              <button
                className={`${styles.styleButton} ${
                  filters.style1 === "동물" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("style1", "동물")}
              >
                {t.animal}
              </button>
            </div>
          )}
          {activeTab === "type" && (
            <div className={styles.centerAlign}>
              <button
                className={`${styles.styleButton} ${
                  filters.style2 === "가로형" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("style2", "가로형")}
              >
                {t.horizontal}
              </button>
              <button
                className={`${styles.styleButton} ${
                  filters.style2 === "세로형" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("style2", "세로형")}
              >
                {t.vertical}
              </button>
              <button
                className={`${styles.styleButton} ${
                  filters.style2 === "정사각형" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("style2", "정사각형")}
              >
                {t.square}
              </button>
            </div>
          )}
          {activeTab === "size" && (
            <div className={styles.centerAlign}>
              <button
                className={`${styles.priceButton} ${
                  filters.price1 === "10호 미만" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("price1", "10호 미만")}
              >
                {t.small}
              </button>
              <button
                className={`${styles.priceButton} ${
                  filters.price1 === "30호 미만" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("price1", "30호 미만")}
              >
                {t.medium}
              </button>
              <button
                className={`${styles.priceButton} ${
                  filters.price1 === "50호 미만" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("price1", "50호 미만")}
              >
                {t.large}
              </button>
              <button
                className={`${styles.priceButton} ${
                  filters.price1 === "70호 미만" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("price1", "70호 미만")}
              >
                {t.xLarge}
              </button>
              <button
                className={`${styles.priceButton} ${
                  filters.price1 === "100호 이상" ? styles.active : ""
                }
                }`}
                onClick={() => toggleFilter("price1", "100호 이상")}
              >
                {t.xxLarge}
              </button>
            </div>
          )}
          {activeTab === "price" && (
            <div className={styles.centerAlign}>
              <button
                className={`${styles.priceButton} ${
                  filters.price2 === "50만원 미만" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("price2", "50만원 미만")}
              >
                {t.price1}
              </button>
              <button
                className={`${styles.priceButton} ${
                  filters.price2 === "80만원 미만" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("price2", "80만원 미만")}
              >
                {t.price2}
              </button>
              <button
                className={`${styles.priceButton} ${
                  filters.price2 === "100만원 미만" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("price2", "100만원 미만")}
              >
                {t.price3}
              </button>
              <button
                className={`${styles.priceButton} ${
                  filters.price2 === "150만원 미만" ? styles.active : ""
                }`}
                onClick={() => toggleFilter("price2", "150만원 미만")}
              >
                {t.price4}
              </button>
              <button
                className={`${styles.priceButton} ${
                  filters.price2 === "150만원 이상" ? styles.active : ""
                }
                }`}
                onClick={() => toggleFilter("price2", "150만원 이상")}
              >
                {t.price5}
              </button>
            </div>
          )}
          <div className={styles.recentKeywords}>
            {recentKeywords.map((keyword, index) => (
              <span key={index} className={styles.keywordTag}>
                {keyword}
                <AiOutlineClose onClick={() => removeKeyword(keyword)} />
              </span>
            ))}
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
