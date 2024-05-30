import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../css/SignatureDetail.module.css"; // Ensure this path is correct based on your project structure
import BackButton from "../components/BackButton";

function SignatureDetail() {
  const { itemId } = useParams();
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isBuyGuideModalOpen, setIsBuyGuideModalOpen] = useState(false);

  const openReviewModal = () => setIsReviewModalOpen(true);
  const closeReviewModal = () => setIsReviewModalOpen(false);

  const openBuyGuideModal = () => setIsBuyGuideModalOpen(true);
  const closeBuyGuideModal = () => setIsBuyGuideModalOpen(false);

  return (
    <div className={styles.detailPage}>
      <BackButton />
      <div className={styles.detailContainer}>
        <div className={styles.imageSection}>
          <div className={styles.mainImagePlaceholder}></div>
          <div className={styles.thumbnailContainer}>
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className={styles.thumbnailPlaceholder}></div>
            ))}
          </div>
        </div>
        <div className={styles.infoSection}>
          <h1 className={styles.itemName}>Frank Chouteau Brown (작가이름)</h1>
          <h2 className={styles.itemTitle}>
            Linen Like Hard Twist Cotton 1 (작품명)
          </h2>
          <p className={styles.itemPrice}>270,000원</p>
          <p className={styles.itemDescription}>
            프랭크 쇼토 브라운(Frank Chouteau Brown)은 미네소타주
            미니애폴리스(Minneapolis)에서 태어나 미니애폴리스
            미술학교(Minneapolis School of Fine Arts), 보스턴 아트 클럽(Boston
            Art Club) 등에서 교육을 받은 미국인 건축가입니다.
          </p>
          <div className={styles.optionSection}>
            <div className={styles.colorOptions}>
              <h3>COLOR</h3>
              <div className={styles.colors}>
                {/* 색상 옵션 추가 */}
                {[
                  "#f00",
                  "#0f0",
                  "#00f",
                  "#ff0",
                  "#f0f",
                  "#0ff",
                  "#000",
                  "#fff",
                ].map((color, index) => (
                  <div
                    key={index}
                    className={styles.colorOption}
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>
            <div className={styles.sizeOptions}>
              <h3>SIZE</h3>
              <select className={styles.sizeSelect}>
                <option>30 x 30 mm</option>
                <option>50 x 50 mm</option>
                <option>70 x 70 mm</option>
              </select>
            </div>
          </div>
          <button className={styles.buyButton} onClick={openBuyGuideModal}>
            구매하기
          </button>
          <button className={styles.reviewButton} onClick={openReviewModal}>
            리뷰 작성하기
          </button>
        </div>
      </div>
      <h2 className={styles.sectionTitle}>비슷한 작품</h2>
      <div className={styles.similarItemsContainer}>
        {Array.from({ length: 15 }).map((_, index) => (
          <div key={index} className={styles.similarItem}>
            <div className={styles.similarImagePlaceholder}></div>
            <div className={styles.similarItemDetails}>
              <p>
                <span className={styles.headtext}>제목</span>
              </p>
              <p>작품 설명내용</p>
              <p>120,000원</p>
            </div>
          </div>
        ))}
      </div>
      {isReviewModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2>
                Frank Chouteau Brown (작가이름) Linen Like Hard Twist Cotton 1
                (작품명)
              </h2>
              <button className={styles.closeButton} onClick={closeReviewModal}>
                ×
              </button>
            </div>
            <div className={styles.modalBody}>
              <input
                type="text"
                className={styles.titleInput}
                placeholder="제목"
              />
              <textarea
                className={styles.reviewTextarea}
                placeholder="리뷰를 작성해주세요."
              ></textarea>
              <div className={styles.imageUpload}>
                <span>사진첨부</span>
                <div className={styles.imagePlaceholder}></div>
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.submitButton}>
                등록하고 5,000원 할인쿠폰받기
              </button>
            </div>
          </div>
        </div>
      )}
      {isBuyGuideModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2>구매안내</h2>
              <button
                className={styles.closeButton}
                onClick={closeBuyGuideModal}
              >
                ×
              </button>
            </div>
            <div className={styles.modalTabs}>
              <button className={styles.tabButton}>배송안내</button>
              <button className={styles.tabButton}>교환 및 반품</button>
              <button className={styles.tabButton}>제품문의</button>
            </div>
            <div className={styles.modalBody}>
              <p>배송안내 내용</p>
              <p>교환 및 반품 내용</p>
              <p>제품문의 내용</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignatureDetail;
