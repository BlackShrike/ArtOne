import React from "react";
import { useParams } from "react-router-dom";
import styles from "../css/ArtistDetail.module.css"; // Ensure the path is correct
import BackButton from "../components/BackButton"; // Assuming there's a BackButton component

function ArtistDetail() {
  const { name } = useParams();

  return (
    <div className={styles.artistDetailPage}>
      <BackButton />
      <div className={styles.artistInfo}>
        <div className={styles.artistPhoto}></div>
        <div className={styles.artistBio}>
          <h1>{name}</h1>
          <p>
            작가명 작가상세명 작가상세명 작가상세명 작가상세명 작가상세명
            작가상세명 작가상세명 작가상세명 작가상세명 작가상세명 작가상세명
            작가상세명 작가상세명 작가상세명 작가상세명 작가상세명 작가상세명
            작가상세명 작가상세명 작가상세명 작가상세명
          </p>
        </div>
      </div>
      <div className={styles.artistWorks}>
        <h2>작품들</h2>
        <div className={styles.worksGrid}>
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className={styles.workItem}>
              <div className={styles.workImage}></div>
              <div className={styles.workDetails}>
                <p>작품제목 작품제목 작품제목</p>
                <p>판매금액</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArtistDetail;
