import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../css/SignatureDetail.module.css";
import BackButton from "../components/BackButton";
import { FaTimes, FaCartPlus, FaPlus } from "react-icons/fa";

const reviewTitles = [
  "너무 좋아요!",
  "괜찮아요.",
  "별로에요.",
  "최고에요!",
  "추천합니다.",
];

const reviewContents = [
  "디자인이 좋아서 구매했어요. 색감도 예쁘고 마음에 들어요!",
  "사용해보니 괜찮습니다. 무난해요.",
  "품질이 기대 이하입니다. 다시 구매하지 않을 것 같아요.",
  "정말 최고입니다! 강력 추천해요.",
  "친구에게도 추천할만한 제품입니다.",
];

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function SignatureDetail() {
  const { id } = useParams();
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const toggleReviewModal = () => setShowReviewModal(!showReviewModal);
  const togglePurchaseModal = () => setShowPurchaseModal(!showPurchaseModal);

  return (
    <div className={styles.detailPage}>
      <BackButton />
      <div className={styles.detailContainer}>
        <div className={styles.imageSection}>
          <div className={styles.imagePlaceholder}></div>
          <div className={styles.imageThumbnails}>
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className={styles.thumbnailPlaceholder}></div>
            ))}
          </div>
        </div>
        <div className={styles.details}>
          <h1>작품명 {id}</h1>
          <h2>작품 설명</h2>
          <p>
            설명내용 <span className={styles.price}>270,000원</span>
          </p>
          <p>작가 설명</p>
          <div className={styles.selectionRow}>
            <div className={styles.colorSelection}>
              <p>
                COLOR
                <div className={styles.colors}>
                  <span
                    className={styles.color}
                    style={{ backgroundColor: "#D3A79A" }}
                  ></span>
                  <span
                    className={styles.color}
                    style={{ backgroundColor: "#F1C6C0" }}
                  ></span>
                  <span
                    className={styles.color}
                    style={{ backgroundColor: "#D0B49F" }}
                  ></span>
                  <span
                    className={styles.color}
                    style={{ backgroundColor: "#F4D9C6" }}
                  ></span>
                  <span
                    className={styles.color}
                    style={{ backgroundColor: "#F1E0CE" }}
                  ></span>
                  <span
                    className={styles.color}
                    style={{ backgroundColor: "#C0B7B4" }}
                  ></span>
                  <span
                    className={styles.color}
                    style={{ backgroundColor: "#F1E0CE" }}
                  ></span>
                  <span
                    className={styles.color}
                    style={{ backgroundColor: "#C0B7B4" }}
                  ></span>
                </div>
              </p>
            </div>
            <div className={styles.sizeSelection}>
              <p>
                SIZE
                <select>
                  <option>옵션을 선택해 주세요</option>
                  <option>30 x 30 mm</option>
                  <option>50 x 50 mm</option>
                  <option>70 x 70 mm</option>
                </select>
              </p>
            </div>
          </div>
          <div className={styles.totalPrice}>
            <p>
              합계 <span className={styles.price}>270,000원</span>
            </p>
          </div>
          <button
            className={styles.purchaseButton}
            onClick={togglePurchaseModal}
          >
            구매하기
          </button>
        </div>
      </div>
      <div className={styles.reviews}>
        <h2>전체 리뷰</h2>
        <div className={styles.reviewNotice}>
          리뷰를 작성해주시면 5000원 할인쿠폰을 드립니다.{" "}
          <button
            className={styles.writeReviewButton}
            onClick={toggleReviewModal}
          >
            리뷰 작성하기
          </button>
        </div>
        <div className={styles.reviewList}>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className={styles.reviewItem}>
              <p className={styles.reviewer}>ooo님</p>
              <p className={styles.reviewTitle}>
                {getRandomElement(reviewTitles)}
              </p>
              <div className={styles.reviewImagePlaceholder}></div>
              <p className={styles.reviewContent}>
                {getRandomElement(reviewContents)}
              </p>
              <div className={styles.reviewSeparator}></div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.similarWorks}>
        <h2>비슷한 작품</h2>
        <div className={styles.gridContainer}>
          {Array.from({ length: 20 }).map((_, index) => (
            <div key={index} className={styles.gridItem}>
              <div className={styles.gridImagePlaceholder}></div>
              <div className={styles.itemDetails}>
                <p className={styles.itemTitle}>제목</p>
                <p className={styles.itemDescription}>
                  작품 설명내용 <FaCartPlus className={styles.cartIcon} />
                </p>
                <p>120,000원</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showReviewModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <FaTimes className={styles.closeIcon} onClick={toggleReviewModal} />
            <h2>리뷰 작성하기</h2>
            <select className={styles.reviewHead}>
              <option>제목을 선택해 주세요</option>
              <option>제품 감사합니다. 잘 받았어요.</option>
              <option>집이 화사해 보여서 정말 좋아요!</option>
              <option>작품이 너무 예뻐요. 추천합니다.</option>
              <option>작품이 너무 마음에 들어요!</option>
            </select>
            <textarea
              className={styles.reviewContent}
              placeholder="리뷰를 작성해 주세요."
            ></textarea>
            <div className={styles.imageUpload}>
              <span>사진첨부</span>
              <div className={styles.imageUploadPlaceholder}>
                {" "}
                <FaPlus className={styles.uploadIcon} />
              </div>
            </div>
            <button className={styles.submitButton}>
              등록하고 5,000원 할인쿠폰받기
            </button>
          </div>
        </div>
      )}
      {showPurchaseModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <FaTimes
              className={styles.closeIcon}
              onClick={togglePurchaseModal}
            />
            <h2>구매안내</h2>
            <div className={styles.tabs}>
              {["배송안내", "교환 및 반품", "제품문의"].map((tab, index) => (
                <span
                  key={index}
                  className={`${styles.tab} ${
                    activeTab === index ? styles.activeTab : ""
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab}
                </span>
              ))}
            </div>
            {activeTab === 0 && (
              <>
                <h2>1.내용</h2>
                <p>
                  내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                </p>
                <h2>2.내용</h2>
                <p>
                  내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                </p>
              </>
            )}
            {activeTab === 1 && (
              <>
                <h2>1.내용</h2>
                <p>
                  내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                </p>
                <h2>2.내용</h2>
                <p>
                  내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                </p>
              </>
            )}
            {activeTab === 2 && (
              <>
                <h2>1.내용</h2>
                <p>
                  내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                </p>
                <h2>2.내용</h2>
                <p>
                  내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default SignatureDetail;
