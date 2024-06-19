import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "../css/ArtistDetail.module.css"; // Ensure this path is correct based on your project structure
import BackButton from "../components/BackButton";

function ArtistDetail() {
  const { artistName } = useParams();
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className={styles.gridPage}>
      <BackButton />
      <div className={styles.artistInfo}>
        <div className={styles.artistImagePlaceholder}></div>
        <div className={styles.artistDetails}>
          <h1 className={styles.artistName}>{artistName}</h1>
          <div className={styles.artistBio}>
            <h2>작가</h2>
            <p>
              설명작가 설명작가 설명작가 설명작가 설명작가 설명작가 설명작가
            </p>
            <p>설명작가 설명작가 설명작가 설명작가 설명</p>
            {showMore && (
              <>
                <p>추가 설명작가 추가 설명작가 추가 설명작가 추가 설명작가</p>
                <p>추가 설명작가 추가 설명작가 추가 설명작가 추가 설명작가</p>
              </>
            )}
            <p className={styles.moretext} onClick={handleShowMore}>
              {showMore ? "접기" : "더보기"}
            </p>
          </div>
        </div>
      </div>
      <h2 className={styles.sectionTitle}>{artistName}의 작품</h2>
      <div className={styles.gridContainer}>
        {Array.from({ length: 30 }).map((_, index) => (
          <div key={index} className={styles.gridItem}>
            <div className={styles.imagePlaceholder}></div>
            <div className={styles.itemDetails}>
              <p>
                <span className={styles.headtext}>제목</span>
              </p>
              <p>작품 설명내용작품 설명내용작품 설명내용작품 설명내용</p>
              <p>작품 설명내용작품 설명내용작품 설명내용작품 설명내용</p>
              <p>120,000원</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        <button className={styles.pageArrow}>{"<"}</button>
        {Array.from({ length: 9 }).map((_, index) => (
          <button key={index} className={styles.pageNumber}>
            {index + 1}
          </button>
        ))}
        <button className={styles.pageArrow}>{">"}</button>
      </div>
    </div>
  );
}

export default ArtistDetail;
