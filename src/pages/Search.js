import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "../css/Search.module.css";
import { useLanguage } from "../components/LanguageContext";

const translations = {
  KR: {
    search: "검색",
    searchPlaceholder: "검색어를 입력하세요",
    recentSearches: "최근 검색어",
    recommendedSearches: "추천 검색어",
  },
  EN: {
    search: "Search",
    searchPlaceholder: "Enter search term",
    recentSearches: "Recent Searches",
    recommendedSearches: "Recommended Searches",
  },
};

const Search = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // Go back to the previous page
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
        <input
          type="text"
          placeholder={t.searchPlaceholder}
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>
          <Link to="/search-results">
            <FaSearch />
          </Link>
        </button>
      </div>
      <section className={styles.recentSearches}>
        <h2>{t.recentSearches}</h2>
        <div className={styles.searchTerms}>
          {["최근검색어1", "최근검색어2", "최근검색어3", "최근검색어4"].map(
            (term, index) => (
              <div key={index} className={styles.searchTerm}>
                {term} <button className={styles.removeButton}>✖</button>
              </div>
            )
          )}
        </div>
      </section>
      <section className={styles.recommendedSearches}>
        <h2>{t.recommendedSearches}</h2>
        <div className={styles.recommendButtons}>
          {["추천검색어1", "추천검색어2", "추천검색어3", "추천검색어4"].map(
            (term, index) => (
              <button key={index} className={styles.recommendButton}>
                {term}
              </button>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default Search;
