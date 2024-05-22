import React, { useState, useEffect } from "react";
import "../css/Original.css"; // Ensure this path is correct based on your project structure

function Original() {
  const [filters, setFilters] = useState({
    type: localStorage.getItem("type") || "전체",
    style: JSON.parse(localStorage.getItem("style")) || [],
    price: JSON.parse(localStorage.getItem("price")) || [],
  });

  useEffect(() => {
    localStorage.setItem("type", filters.type);
    localStorage.setItem("style", JSON.stringify(filters.style));
    localStorage.setItem("price", JSON.stringify(filters.price));
  }, [filters]);

  const toggleFilter = (category, value) => {
    setFilters((prevFilters) => {
      const categoryFilters = prevFilters[category];
      if (categoryFilters.includes(value)) {
        return {
          ...prevFilters,
          [category]: categoryFilters.filter((filter) => filter !== value),
        };
      } else {
        return {
          ...prevFilters,
          [category]: [...categoryFilters, value],
        };
      }
    });
  };

  const resetFilters = () => {
    setFilters({
      type: "전체",
      style: [],
      price: [],
    });
    localStorage.removeItem("type");
    localStorage.removeItem("style");
    localStorage.removeItem("price");
  };

  return (
    <div className="filter-container">
      <div className="left-align">
        <button
          className={filters.type === "전체" ? "active" : ""}
          onClick={() => setFilters({ ...filters, type: "전체" })}
        >
          전체
        </button>
        <button
          className={filters.type === "원화" ? "active" : ""}
          onClick={() => setFilters({ ...filters, type: "원화" })}
        >
          원화
        </button>
        <button
          className={filters.type === "판화" ? "active" : ""}
          onClick={() => setFilters({ ...filters, type: "판화" })}
        >
          판화
        </button>
      </div>
      <div className="recent-keywords">
        <span>최근 검색 키워드: </span>
        {filters.style.concat(filters.price).map((filter) => (
          <span key={filter} className="keyword-tag">
            {filter}
          </span>
        ))}
        <button className="reset-button" onClick={resetFilters}>
          <img src="/path/to/refresh-icon.png" alt="새로고침" />
        </button>
      </div>
      <div className="filter-box">
        <div className="filter-header"></div>
        <div className="center-align">
          <div className="filter-category">
            <button
              className={filters.style.includes("추상") ? "active" : ""}
              onClick={() => toggleFilter("style", "추상")}
            >
              추상
            </button>
            <button
              className={filters.style.includes("인물") ? "active" : ""}
              onClick={() => toggleFilter("style", "인물")}
            >
              인물
            </button>
            <button
              className={filters.style.includes("풍경") ? "active" : ""}
              onClick={() => toggleFilter("style", "풍경")}
            >
              풍경
            </button>
            <button
              className={filters.style.includes("정물") ? "active" : ""}
              onClick={() => toggleFilter("style", "정물")}
            >
              정물
            </button>
            <button
              className={filters.style.includes("동물") ? "active" : ""}
              onClick={() => toggleFilter("style", "동물")}
            >
              동물
            </button>
          </div>
          <div className="filter-category">
            <button
              className={filters.style.includes("가로형") ? "active" : ""}
              onClick={() => toggleFilter("style", "가로형")}
            >
              가로형
            </button>
            <button
              className={filters.style.includes("세로형") ? "active" : ""}
              onClick={() => toggleFilter("style", "세로형")}
            >
              세로형
            </button>
            <button
              className={filters.style.includes("정사각형") ? "active" : ""}
              onClick={() => toggleFilter("style", "정사각형")}
            >
              정사각형
            </button>
          </div>
          <div className="filter-category">
            <button
              className={filters.price.includes("10호 미만") ? "active" : ""}
              onClick={() => toggleFilter("price", "10호 미만")}
            >
              10호 미만
            </button>
            <button
              className={filters.price.includes("30호 미만") ? "active" : ""}
              onClick={() => toggleFilter("price", "30호 미만")}
            >
              30호 미만
            </button>
            <button
              className={filters.price.includes("50호 미만") ? "active" : ""}
              onClick={() => toggleFilter("price", "50호 미만")}
            >
              50호 미만
            </button>
            <button
              className={filters.price.includes("70호 미만") ? "active" : ""}
              onClick={() => toggleFilter("price", "70호 미만")}
            >
              70호 미만
            </button>
            <button
              className={filters.price.includes("100호 이상") ? "active" : ""}
              onClick={() => toggleFilter("price", "100호 이상")}
            >
              100호 이상
            </button>
          </div>
          <div className="filter-category">
            <button
              className={filters.price.includes("50만원 미만") ? "active" : ""}
              onClick={() => toggleFilter("price", "50만원 미만")}
            >
              50만원 미만
            </button>
            <button
              className={filters.price.includes("80만원 미만") ? "active" : ""}
              onClick={() => toggleFilter("price", "80만원 미만")}
            >
              80만원 미만
            </button>
            <button
              className={filters.price.includes("100만원 미만") ? "active" : ""}
              onClick={() => toggleFilter("price", "100만원 미만")}
            >
              100만원 미만
            </button>
            <button
              className={filters.price.includes("150만원 미만") ? "active" : ""}
              onClick={() => toggleFilter("price", "150만원 미만")}
            >
              150만원 미만
            </button>
            <button
              className={filters.price.includes("150만원 이상") ? "active" : ""}
              onClick={() => toggleFilter("price", "150만원 이상")}
            >
              150만원 이상
            </button>
          </div>
        </div>
        <div className="selected-filters">
          {filters.style.map((filter) => (
            <span key={filter} className="filter-tag">
              {filter}{" "}
              <button onClick={() => toggleFilter("style", filter)}>x</button>
            </span>
          ))}
          {filters.price.map((filter) => (
            <span key={filter} className="filter-tag">
              {filter}{" "}
              <button onClick={() => toggleFilter("price", filter)}>x</button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Original;
