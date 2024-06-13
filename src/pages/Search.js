// src/pages/Search.js
import React from "react";
import styles from "../css/Search.module.css";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Search = () => {
  return (
    <div className={styles.searchPage}>
      <header className={styles.header}>
        <h1>검색</h1>
        <button className={styles.closeButton}>✖</button>
      </header>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>
          <Link to="/search-results">
            <FaSearch />
          </Link>
        </button>
      </div>
      <section className={styles.recentSearches}>
        <h2>최근 검색어</h2>
        {["최근검색어1", "최근검색어2", "최근검색어3", "최근검색어4"].map(
          (term, index) => (
            <div key={index} className={styles.searchTerm}>
              {term} <button className={styles.removeButton}>✖</button>
            </div>
          )
        )}
      </section>
      <section className={styles.recommendedSearches}>
        <h2>추천 검색어</h2>
        {["추천검색어1", "추천검색어2", "추천검색어3", "추천검색어4"].map(
          (term, index) => (
            <button key={index} className={styles.recommendButton}>
              {term}
            </button>
          )
        )}
      </section>
    </div>
  );
};

export default Search;
