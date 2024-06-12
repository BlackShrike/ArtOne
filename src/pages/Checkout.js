import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/Checkout.module.css"; // Ensure the path is correct
import BackButton from "../components/BackButton";
function Checkout() {
  const [selectedItems, setSelectedItems] = useState([]);
  const items = [
    {
      id: 1,
      name: "상품명 예시(상세정보)",
      price: "120,000원",
      options: [
        "옵션 1: 40 x 50 cm",
        "옵션 2: 포스터(액자) 별도 열람(매장 표시)",
      ],
    },
    {
      id: 2,
      name: "상품명 예시(상세정보)",
      price: "120,000원",
      options: [
        "옵션 1: 40 x 50 cm",
        "옵션 2: 포스터(액자) 별도 열람(매장 표시)",
      ],
    },
  ];

  const handleSelectAll = () => {
    if (selectedItems.length === items.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(items.map((item) => item.id));
    }
  };

  const handleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <div className={styles.checkoutContainer}>
      <BackButton />
      <div className={styles.checkoutContent}>
        <div className={styles.checkoutItemsContainer}>
          <div className={styles.checkoutItemHeader}>
            <label>
              <input
                type="checkbox"
                checked={selectedItems.length === items.length}
                onChange={handleSelectAll}
              />
              <span>
                전체 선택({selectedItems.length}/{items.length})
              </span>
            </label>
            <label>
              <input type="checkbox" />
              <span>선택삭제</span>
            </label>
          </div>
          <section className={styles.checkoutItemsSection}>
            {items.map((item) => (
              <div className={styles.checkoutItemContainer} key={item.id}>
                <input
                  type="checkbox"
                  className={styles.itemCheckbox}
                  checked={selectedItems.includes(item.id)}
                  onChange={() => handleSelectItem(item.id)}
                />
                <div className={styles.checkoutItem}>
                  <div className={styles.itemDetails}>
                    <p className={styles.itemName}>{item.name}</p>
                    <p className={styles.itemPrice}>{item.price}</p>
                    {item.options.map((option, index) => (
                      <p key={index} className={styles.itemOption}>
                        {option}
                      </p>
                    ))}
                  </div>
                  <div className={styles.imagePlaceholder}></div>
                </div>
              </div>
            ))}
          </section>
        </div>
        <div className={styles.checkoutSummaryContainer}>
          <div className={styles.checkoutStepContainer}>
            <span className={styles.checkoutStep}>
              <span className={styles.redText}>장바구니</span> → 주문/결제 →
              결제완료
            </span>
          </div>
          <div className={styles.checkoutSummary}>
            <h3>주문 예상 금액</h3>
            <div className={styles.amountContainer}>
              <p>총 상품금액</p>
              <p>
                {items
                  .reduce(
                    (acc, item) => acc + parseInt(item.price.replace(/,/g, "")),
                    0
                  )
                  .toLocaleString()}
                원
              </p>
            </div>
            <div className={styles.amountContainer}>
              <span>총 할인</span>
              <span className={styles.redText}>-0</span>
            </div>
            <div className={styles.amountContainer}>
              <p>총 배송액</p>
              <p>0원</p>
            </div>
            <h3>
              합계:{" "}
              {items
                .reduce(
                  (acc, item) => acc + parseInt(item.price.replace(/,/g, "")),
                  0
                )
                .toLocaleString()}
              원
            </h3>
            <Link to="/OrderCheckout" className={styles.purchaseButton}>
              구매하기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
