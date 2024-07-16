//Search.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import styles from "../css/Search.module.css";
import { useLanguage } from "../components/LanguageContext";

const translations = {
  KR: {
    search: "검색",
    recentSearches: "최근 검색어",
    recommendedSearches: "추천 검색어",
  },
  EN: {
    search: "Search",
    recentSearches: "Recent Searches",
    recommendedSearches: "Recommended Searches",
  },
};

const Search = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleClose = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleSearch = () => {
    if (searchTerm) {
      navigate(`/search-results?query=${searchTerm}`);
    }
  };

  return (
    <div className={styles.searchPage}>
      <header className={styles.header}>
        <h1>{t.search}</h1>
        <button className={styles.closeButton} onClick={handleClose}>
          ✖
        </button>
      </header>
      <div className={styles.searchContainer}>
        <div className={styles.searchInputWrapper}>
          <input
            type="text"
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className={styles.searchButton} onClick={handleSearch}>
            <FaSearch />
          </button>
        </div>
      </div>
      <section className={styles.recentSearches}>
        <h2>{t.recentSearches}</h2>
        <div className={styles.searchTerms}>
          {["최근검색어1", "최근검색어2", "최근검색어3", "최근검색어4"].map(
            (term, index) => (
              <p key={index} className={styles.searchTerm}>
                {term} <button className={styles.removeButton}>✖</button>
              </p>
            )
          )}
        </div>
      </section>
      <section className={styles.recommendedSearches}>
        <h2>{t.recommendedSearches}</h2>
        <div className={styles.recommendButtons}>
          {[
            "추천검색어1",
            "추천검색어2",
            "추천검색어3",
            "추천검색어4",
            "추천검색어5",
            "추천검색어6",
            "추천검색어7",
            "추천검색어8",
          ].map((term, index) => (
            <button key={index} className={styles.recommendButton}>
              {term}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Search;
