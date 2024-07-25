import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/SignatureDetail.module.css";
import { FaTimes, FaCartPlus, FaPlus } from "react-icons/fa";
import { RiShoppingBag4Line } from "react-icons/ri";
import { useLanguage } from "../components/LanguageContext";

const translations = {
  KR: {
    artistName: "작가",
    artworkName: "작품명",
    artworkInfo: "작품 정보",
    price: "270,000원",
    description: "작품 설명",
    colorLabel: "COLOR",
    sizeLabel: "SIZE",
    sizeOptions: [
      "옵션을 선택해 주세요",
      "30 x 30 mm",
      "50 x 50 mm",
      "70 x 70 mm",
    ],
    quantityText: "수량",
    totalText: "합계",
    basketButton: "장바구니",
    purchaseButton: "구매하기",
    reviewsHead: "리뷰",
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
    reviewModalPlaceholder: "리뷰를 작성해주세요.",
    imageUploadText: "사진첨부",
    submitButton: "등록하고 5,000원 할인쿠폰받기",
    purchaseModalTitle: "구매안내",
    tabs: ["배송안내", "교환 및 반품", "제품문의"],
    tabContents: [
      {
        title: "1. 제목",
        content:
          "- 내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용",
      },
      {
        title: "2. 제목",
        content:
          "- 내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용",
      },
      {
        title: "3. 제목",
        content:
          "- 내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용",
      },
    ],
  },
  EN: {
    artistName: "Artist Name",
    artworkName: "Artwork Name",
    artworkInfo: "Artwork Info",
    price: "$270.00",
    description: "Artwork Description",
    colorLabel: "COLOR",
    sizeLabel: "SIZE",
    sizeOptions: [
      "Please select an option",
      "30 x 30 mm",
      "50 x 50 mm",
      "70 x 70 mm",
    ],
    quantityText: "Quantity",
    totalText: "Total",
    basketButton: "Add to Basket",
    purchaseButton: "Purchase",
    reviewsHead: "Review",
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
        title: "1. Title",
        content:
          "- Content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content",
      },
      {
        title: "2. Title",
        content:
          "- Content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content",
      },
      {
        title: "3. Title",
        content:
          "- Content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content",
      },
    ],
  },
};

function SignatureDetail({ id, product }) {
  const { language } = useLanguage();
  const t = translations[language];
  const navigate = useNavigate();

  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleReviewModal = () => setShowReviewModal(!showReviewModal);
  const togglePurchaseModal = () => setShowPurchaseModal(!showPurchaseModal);
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handlePurchaseClick = () => {
    navigate("/checkout");
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
    togglePurchaseModal();
  };

  return (
    <div className={styles.detailPage}>
      <div className={styles.detailContainer}>
        <div className={styles.imageSection}>
          <div
            className={styles.imagePlaceholder}
            style={{
              backgroundImage: `url(${product.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className={styles.imageThumbnails}>
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className={styles.thumbnailPlaceholder}
                style={{
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            ))}
          </div>
        </div>
        <div className={styles.details}>
          <h2>
            {product.artist}
            <br />
            {product.title}
          </h2>
          <p className={styles.detailsRow}>
            <span className={styles.greyText}>{t.artworkInfo}</span>
            <span className={styles.price}>{t.price}</span>
          </p>
          <p>{product.description}</p>
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
              <p>{t.totalText} </p>
              <p>
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
              onClick={handlePurchaseClick}
            >
              {t.purchaseButton}
            </button>
          </div>
          <p className={styles.warningText}>
            주문 제작 상품(액자)의 경우 발주 확인 후 취소 및 교환, 환불이
            불가합니다. 제작 및 발송까지 영업일 기준 약 7일 소요됩니다.
          </p>
          <div
            className={styles.purchaseInfoRow}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "구매안내 ∧" : "구매안내 ∨"}
          </div>
          {isExpanded && (
            <>
              <div className={styles.tabs}>
                {t.tabs.map((tab, index) => (
                  <React.Fragment key={index}>
                    <span
                      key={index}
                      className={styles.tab}
                      onClick={() => handleTabClick(index)}
                    >
                      {tab}
                    </span>
                    {index < t.tabs.length - 1 && (
                      <span className={styles.dot}>·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <div className={styles.extraImagePlaceholder}>
        <div className={styles.innerImagePlaceholder}></div>
      </div>
      <div className={styles.reviews}>
        <h2 className={styles.reviewsHead}>{t.reviewsHead}</h2>
        <h2 className={styles.reviewsTitle}>{t.reviewsTitle}</h2>
        <div className={styles.reviewNotice}>
          {t.reviewNotice}
          {!isMobile && (
            <button
              className={styles.writeReviewButton}
              onClick={toggleReviewModal}
            >
              {t.writeReviewButton}
            </button>
          )}
        </div>
        <div className={styles.reviewList}>
          <div className={styles.reviewItem}>
            <p className={styles.reviewer}>ooo님</p>
            <div className={styles.reviewImages}>
              <div className={styles.reviewImagePlaceholder}></div>
              <div className={styles.reviewImagePlaceholder}></div>
              <div className={styles.reviewImagePlaceholder}></div>
            </div>
            <p className={styles.reviewTitle}>
              리뷰제목리뷰제목리뷰제목리뷰제목리뷰제목리뷰제목리뷰제목
            </p>
            <p className={styles.reviewContent}>
              리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용리뷰내용
            </p>
            <div className={styles.reviewSeparator}></div>
          </div>
          {isMobile && (
            <button
              className={styles.writeReviewButton}
              onClick={toggleReviewModal}
            >
              {t.writeReviewButton}
            </button>
          )}
        </div>
      </div>
      <div className={styles.similarWorks}>
        <h2>{t.similarWorksTitle}</h2>
        <div className={styles.gridContainer}>
          {Array.from({ length: 20 }).map((_, index) => (
            <div key={index} className={styles.gridItem}>
              <div
                className={styles.gridImagePlaceholder}
                style={{
                  backgroundImage: `url(${product.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
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
              <div className={styles.modalTitle}>
                <div className={styles.reviewModalTitle}>
                  <p>{product.artist}</p>
                  <p>{product.title}</p>
                </div>
              </div>
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
                <React.Fragment key={index}>
                  <span
                    className={`${styles.tab} ${
                      activeTab === index ? styles.activeTab : ""
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    {tab}
                  </span>
                </React.Fragment>
              ))}
            </div>
            <div className={styles.tabContent}>
              <h3>{t.tabContents[activeTab].title[0]}</h3>
              <p>{t.tabContents[activeTab].content[0]}</p>
              <h3>{t.tabContents[activeTab].title[1]}</h3>
              <p>{t.tabContents[activeTab].content[1]}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignatureDetail;
