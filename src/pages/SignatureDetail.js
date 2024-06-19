import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../css/SignatureDetail.module.css";
import BackButton from "../components/BackButton";
import { FaTimes, FaCartPlus, FaPlus } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";

function SignatureDetail() {
  const { id } = useParams();
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
          <h2>
            Frank Chouteau Brown(작가이름)
            <br />
            Linen Like Hard Twist Cotton 1 (작품명)
          </h2>
          <p>
            <span className={styles.greyText}>1980년대 미니멀리즘 작품</span>{" "}
            <span className={styles.price}>270,000원</span>
          </p>
          <p>
            프랭크 쇼토 브라운(Frank Chouteau Brown)은 미네소타주
            미니애폴리스(MinneaPolis)에서 태어나 미니애폴리 미술학교(Minneapolis
            School of Fine Arts), 보스턴 아트 클럽(Boston Art Club) 및 유럽에서
            교육을 받은 미국인 건축가 입니다.
          </p>
          <div className={styles.selectionRow}>
            <div className={styles.colorSelection}>
              <p>
                COLOR
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
          <div className={styles.selectionRow}>
            <div className={styles.quantity}>
              Linen Like Hard Twits Cotton Yarn Woven resil 1 RED(알루미늄 액자)
              - 61X91
              <span onClick={decreaseQuantity}>-</span>
              <span>{quantity}</span>
              <span onClick={increaseQuantity}>+</span>
              <span>X</span>
            </div>
            <div className={styles.totalPrice}>
              <p>
                합계 <span className={styles.price}>{270000 * quantity}원</span>
              </p>
            </div>
          </div>
          <div className={styles.purchaseRow}>
            <button className={styles.basketButton}>
              <SlBasket />
            </button>
            <button
              className={styles.purchaseButton}
              onClick={togglePurchaseModal}
            >
              구매하기
            </button>
          </div>
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
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>리뷰 작성하기</h2>
              <FaTimes
                className={styles.closeIcon}
                onClick={toggleReviewModal}
              />
            </div>
            <select className={styles.reviewHead}>
              <option>제목을 선택해 주세요</option>
              <option>제품 감사합니다. 잘 받았어요.</option>
              <option>집이 화사해 보여서 정말 좋아요!</option>
              <option>작품이 너무 예뻐요. 추천합니다.</option>
              <option>작품이 너무 마음에 들어요!</option>
            </select>
            <textarea
              className={styles.reviewmodalContent}
              placeholder="리뷰를 작성해 주세요."
            ></textarea>
            <div className={styles.imageUpload}>
              <span>사진첨부</span>
              <div className={styles.imageUploadPlaceholder}>
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
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>구매안내</h2>
              <FaTimes
                className={styles.closeIcon}
                onClick={togglePurchaseModal}
              />
            </div>
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
                <h3>1.내용</h3>
                <p>
                  -내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                  내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                </p>
                <h3>2.내용</h3>
                <p>
                  -내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                  내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                </p>
              </>
            )}
            {activeTab === 1 && (
              <>
                <h3>1.내용</h3>
                <p>
                  내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                </p>
                <h3>2.내용</h3>
                <p>
                  내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                </p>
              </>
            )}
            {activeTab === 2 && (
              <>
                <h3>1.내용</h3>
                <p>
                  내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
                </p>
                <h3>2.내용</h3>
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
