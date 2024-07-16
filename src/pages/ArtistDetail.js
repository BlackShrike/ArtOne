//ArtistDetail.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../css/ArtistDetail.module.css"; // Ensure this path is correct based on your project structure
import BackButton from "../components/BackButton";
import { FaCartPlus } from "react-icons/fa";
import { useLanguage } from "../components/LanguageContext";

const translations = {
  KR: {
    artist: "작가",
    description:
      "설명작가 설명작가 설명작가 설명작가 설명작가 설명작가 설명작가",
    additionalDescription:
      "추가 설명작가 추가 설명작가 추가 설명작가 추가 설명작가",
    showMore: "더보기",
    showLess: "접기",
    worksTitle: "의 작품",
    title: "제목",
    price: "120,000원",
  },
  EN: {
    artist: "Artist",
    description:
      "Description of the artist, description of the artist, description of the artist",
    additionalDescription:
      "Additional description of the artist, additional description of the artist",
    showMore: "Show More",
    showLess: "Show Less",
    worksTitle: "'s Works",
    title: "Title",
    price: "$120.00",
  },
};

function ArtistDetail() {
  const { artistName } = useParams();
  const [showMore, setShowMore] = useState(false);
  const { language } = useLanguage(); // Use language context
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지를 추적하는 상태

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber); // 페이지 변경 핸들러
  };

  const t = translations[language]; // Get the translations for the current language

  return (
    <div className={styles.gridPage}>
      <BackButton />
      <div className={styles.artistInfo}>
        <div className={styles.artistImagePlaceholder}></div>
        <div className={styles.artistDetails}>
          <h1 className={styles.artistName}>{artistName}</h1>
          <div className={styles.artistBio}>
            <h2>{t.artist}</h2>
            <p>{t.description}</p>
            {showMore && <p>{t.additionalDescription}</p>}
            <p className={styles.moretext} onClick={handleShowMore}>
              {showMore ? t.showLess : t.showMore}
            </p>
          </div>
        </div>
      </div>
      <h2 className={styles.sectionTitle}>
        {artistName}
        {t.worksTitle}
      </h2>
      <div className={styles.gridContainer}>
        {Array.from({ length: 30 }).map((_, index) => (
          <div key={index} className={styles.gridItem}>
            <div className={styles.imagePlaceholder}></div>
            <div className={styles.itemDetails}>
              <p className={styles.priceCart}>
                <span className={styles.headtext}>
                  {t.title} <FaCartPlus className={styles.faCartPlusIcon} />
                </span>
              </p>
              <p>{t.description}</p>
              {showMore && <p>{t.additionalDescription}</p>}
              <p>{t.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        <button
          className={styles.pageArrow}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>
        {Array.from({ length: 9 }).map((_, index) => (
          <button
            key={index}
            className={`${styles.pageNumber} ${
              currentPage === index + 1 ? styles.activePage : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className={styles.pageArrow}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === 9}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

export default ArtistDetail;
