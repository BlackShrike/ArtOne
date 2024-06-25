import React, { useState } from "react";
import styles from "../css/SignatureDetail.module.css";
import { FaTimes, FaCartPlus, FaPlus } from "react-icons/fa";
import { RiShoppingBag4Line } from "react-icons/ri";
import { useLanguage } from "../components/LanguageContext";

const translations = {
  KR: {
    artistName: "Frank Chouteau Brown(작가이름)",
    artworkName: "Linen Like Hard Twist Cotton 1 (작품명)",
    artworkInfo: "1980년대 미니멀리즘 작품",
    price: "270,000원",
    description:
      "프랭크 쇼토 브라운(Frank Chouteau Brown)은 미네소타주 미니애폴리스(MinneaPolis)에서 태어나 미니애폴리 미술학교(Minneapolis School of Fine Arts), 보스턴 아트 클럽(Boston Art Club) 및 유럽에서 교육을 받은 미국인 건축가 입니다.",
    colorLabel: "COLOR",
    sizeLabel: "SIZE",
    sizeOptions: [
      "옵션을 선택해 주세요",
      "30 x 30 mm",
      "50 x 50 mm",
      "70 x 70 mm",
    ],
    quantityText:
      "Linen Like Hard Twits Cotton Yarn Woven resil 1 RED(알루미늄 액자) - 61X91",
    totalText: "합계",
    basketButton: "장바구니",
    purchaseButton: "구매하기",
    reviewsTitle: "전체 리뷰",
    reviewNotice: "리뷰를 작성해주시면 5000원 할인쿠폰을 드립니다.",
    writeReviewButton: "리뷰 작성하기",
    similarWorksTitle: "비슷한 작품",
    reviewModalTitle: "리뷰 작성하기",
    reviewModalSelect: [
      "제목을 선택해 주세요",
      "제품 감사합니다. 잘 받았어요.",
      "집이 화사해 보여서 정말 좋아요!",
      "작품이 너무 예뻐요. 추천합니다.",
      "작품이 너무 마음에 들어요!",
    ],
    reviewModalPlaceholder: "리뷰를 작성해 주세요.",
    imageUploadText: "사진첨부",
    submitButton: "등록하고 5,000원 할인쿠폰받기",
    purchaseModalTitle: "구매안내",
    tabs: ["배송안내", "교환 및 반품", "제품문의"],
    tabContents: [
      {
        title: "1.내용",
        content:
          "-내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용",
      },
      {
        title: "2.내용",
        content:
          "-내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용",
      },
      {
        title: "1.내용",
        content:
          "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용",
      },
      {
        title: "2.내용",
        content:
          "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용",
      },
      {
        title: "1.내용",
        content:
          "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용",
      },
      {
        title: "2.내용",
        content:
          "내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용",
      },
    ],
  },
  EN: {
    artistName: "Frank Chouteau Brown",
    artworkName: "Linen Like Hard Twist Cotton 1",
    artworkInfo: "1980s Minimalism Artwork",
    price: "$270.00",
    description:
      "Frank Chouteau Brown was an American architect born in Minneapolis, Minnesota, who was educated at the Minneapolis School of Fine Arts, Boston Art Club, and in Europe.",
    colorLabel: "COLOR",
    sizeLabel: "SIZE",
    sizeOptions: [
      "Please select an option",
      "30 x 30 mm",
      "50 x 50 mm",
      "70 x 70 mm",
    ],
    quantityText:
      "Linen Like Hard Twits Cotton Yarn Woven resil 1 RED (Aluminum Frame) - 61X91",
    totalText: "Total",
    basketButton: "Add to Basket",
    purchaseButton: "Purchase",
    reviewsTitle: "All Reviews",
    reviewNotice: "Write a review and receive a $5 discount coupon.",
    writeReviewButton: "Write a Review",
    similarWorksTitle: "Similar Works",
    reviewModalTitle: "Write a Review",
    reviewModalSelect: [
      "Please select a title",
      "Thank you for the product. I received it well.",
      "It looks great at home!",
      "The artwork is beautiful. I recommend it.",
      "I love the artwork!",
    ],
    reviewModalPlaceholder: "Please write a review.",
    imageUploadText: "Attach Photo",
    submitButton: "Submit and Receive $5 Discount Coupon",
    purchaseModalTitle: "Purchase Guide",
    tabs: ["Shipping Information", "Returns & Exchanges", "Product Inquiry"],
    tabContents: [
      {
        title: "1. Content",
        content:
          "-Content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content",
      },
      {
        title: "2. Content",
        content:
          "-Content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content",
      },
      {
        title: "1. Content",
        content:
          "Content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content",
      },
      {
        title: "2. Content",
        content:
          "Content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content",
      },
      {
        title: "1. Content",
        content:
          "Content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content",
      },
      {
        title: "2. Content",
        content:
          "Content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content",
      },
    ],
  },
};

function SignatureDetail({ id }) {
  const { language } = useLanguage();
  const t = translations[language];

  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const toggleReviewModal = () => setShowReviewModal(!showReviewModal);
  const togglePurchaseModal = () => setShowPurchaseModal(!showPurchaseModal);
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className={styles.detailPage}>
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
          <h2>
            {t.artistName}
            <br />
            {t.artworkName}
          </h2>
          <p>
            <span className={styles.greyText}>{t.artworkInfo}</span>{" "}
            <span className={styles.price}>{t.price}</span>
          </p>
          <p>{t.description}</p>
          <div className={styles.selectionRow}>
            <div className={styles.colorSelection}>
              <p>
                {t.colorLabel}
                <div className={styles.colors}>
                  <span
                    className={styles.color}
                    style={{ backgroundColor: "#4b3832" }}
                  ></span>
                  <span
                    className={styles.color}
                    style={{ backgroundColor: "#854442" }}
                  ></span>
                  <span
                    className={styles.color}
                    style={{ backgroundColor: "#000000" }}
                  ></span>
                  <span
                    className={styles.color}
                    style={{ backgroundColor: "#e6e6e6" }}
                  ></span>
                  <span
                    className={styles.color}
                    style={{ backgroundColor: "#c25b56" }}
                  ></span>
                  <span
                    className={styles.color}
                    style={{ backgroundColor: "#ef6461" }}
                  ></span>
                  <span
                    className={styles.color}
                    style={{ backgroundColor: "#f5c396" }}
                  ></span>
                  <span
                    className={styles.color}
                    style={{ backgroundColor: "#d3d3d3" }}
                  ></span>
                  <span
                    className={styles.color}
                    style={{ backgroundColor: "#ffd700" }}
                  ></span>
                  <span
                    className={styles.color}
                    style={{ backgroundColor: "#5f9ea0" }}
                  ></span>
                  <span
                    className={styles.color}
                    style={{ backgroundColor: "#d3d3d3" }}
                  ></span>
                  <span
                    className={styles.color}
                    style={{ backgroundColor: "#7f7f7f" }}
                  ></span>
                </div>
              </p>
            </div>
            <div className={styles.sizeSelection}>
              <p>
                {t.sizeLabel}
                <select>
                  {t.sizeOptions.map((option, index) => (
                    <option key={index}>{option}</option>
                  ))}
                </select>
              </p>
            </div>
          </div>
          <div className={styles.selectionRow}>
            <div className={styles.quantity}>
              {t.quantityText}
              <span onClick={decreaseQuantity}>-</span>
              <span>{quantity}</span>
              <span onClick={increaseQuantity}>+</span>
              <span>X</span>
            </div>
            <div className={styles.totalPrice}>
              <p>
                {t.totalText}{" "}
                <span className={styles.price}>{270000 * quantity}원</span>
              </p>
            </div>
          </div>
          <div className={styles.purchaseRow}>
            <button className={styles.basketButton}>
              <RiShoppingBag4Line />
            </button>
            <button
              className={styles.purchaseButton}
              onClick={togglePurchaseModal}
            >
              {t.purchaseButton}
            </button>
          </div>
        </div>
      </div>
      <div className={styles.reviews}>
        <h2>{t.reviewsTitle}</h2>
        <div className={styles.reviewNotice}>
          {t.reviewNotice}{" "}
          <button
            className={styles.writeReviewButton}
            onClick={toggleReviewModal}
          >
            {t.writeReviewButton}
          </button>
        </div>
        <div className={styles.reviewList}>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className={styles.reviewItem}>
              <p className={styles.reviewer}>ooo님</p>
              <div className={styles.reviewImagePlaceholder}></div>
              <p className={styles.reviewTitle}>
                리뷰제목리뷰제목리뷰제목리뷰제목리뷰제목리뷰제목리뷰제목
              </p>
              <p className={styles.reviewContent}>
                리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용
              </p>
              <div className={styles.reviewSeparator}></div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.similarWorks}>
        <h2>{t.similarWorksTitle}</h2>
        <div className={styles.gridContainer}>
          {Array.from({ length: 20 }).map((_, index) => (
            <div key={index} className={styles.gridItem}>
              <div className={styles.gridImagePlaceholder}></div>
              <div className={styles.itemDetails}>
                <p className={styles.itemTitle}>
                  제목 <FaCartPlus className={styles.cartIcon} />
                </p>
                <p>작품 설명내용 </p>
                <p>120,000원</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showReviewModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>{t.reviewModalTitle}</h2>
              <FaTimes
                className={styles.closeIcon}
                onClick={toggleReviewModal}
              />
            </div>
            <select className={styles.reviewHead}>
              {t.reviewModalSelect.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </select>
            <textarea
              className={styles.reviewmodalContent}
              placeholder={t.reviewModalPlaceholder}
            ></textarea>
            <div className={styles.imageUpload}>
              <span>{t.imageUploadText}</span>
              <div className={styles.imageUploadPlaceholder}>
                <FaPlus className={styles.uploadIcon} />
              </div>
            </div>
            <button className={styles.submitButton}>{t.submitButton}</button>
          </div>
        </div>
      )}
      {showPurchaseModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>{t.purchaseModalTitle}</h2>
              <FaTimes
                className={styles.closeIcon}
                onClick={togglePurchaseModal}
              />
            </div>
            <div className={styles.tabs}>
              {t.tabs.map((tab, index) => (
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
            {t.tabContents
              .slice(activeTab * 2, activeTab * 2 + 2)
              .map((content, index) => (
                <React.Fragment key={index}>
                  <h3>{content.title}</h3>
                  <p>{content.content}</p>
                </React.Fragment>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SignatureDetail;
