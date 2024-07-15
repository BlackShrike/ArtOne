import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/Checkout.module.css"; // Ensure the path is correct
import BackButton from "../components/BackButton";
import { useLanguage } from "../components/LanguageContext";

const translations = {
  KR: {
    cart: "장바구니",
    order: "주문/결제",
    completed: "결제완료",
    selectAll: "전체 선택",
    deleteSelected: "선택삭제",
    expectedOrderAmount: "주문 예상 금액",
    totalAmount: "총 상품금액",
    totalDiscount: "총 할인",
    totalShipping: "총 배송액",
    total: "합계",
    purchase: "구매하기",
  },
  EN: {
    cart: "Cart",
    order: "Order/Payment",
    completed: "Payment Completed",
    selectAll: "Select All",
    deleteSelected: "Delete Selected",
    expectedOrderAmount: "Expected Order Amount",
    totalAmount: "Total Product Amount",
    totalDiscount: "Total Discount",
    totalShipping: "Total Shipping",
    total: "Total",
    purchase: "Purchase",
  },
};

function Checkout() {
  const [selectedItems, setSelectedItems] = useState([]);
  const { language } = useLanguage();
  const t = translations[language];
  const navigate = useNavigate();

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
                {t.selectAll} ({selectedItems.length}/{items.length})
              </span>
            </label>
            <label className={styles.chooseDelete}>
              <input type="checkbox" />
              <span>{t.deleteSelected}</span>
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
              <span className={styles.redText}>{t.cart}</span> {" > "}
              <span>{t.order}</span> {" > "} <span>{t.completed}</span>
            </span>
          </div>
          <div className={styles.checkoutSummary}>
            <h2>{t.expectedOrderAmount}</h2>
            <div className={styles.amountContainer}>
              <p>{t.totalAmount}</p>
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
              <p>{t.totalDiscount}</p>
              <span className={styles.redText}>- 0 원</span>
            </div>
            <div className={styles.amountContainer}>
              <p>{t.totalShipping}</p>
              <p>+ 0원</p>
            </div>
            <div
              className={`${styles.amountContainer} ${styles.lastAmountContainer}`}
            >
              <h3>
                {t.total}:{" "}
                {items
                  .reduce(
                    (acc, item) => acc + parseInt(item.price.replace(/,/g, "")),
                    0
                  )
                  .toLocaleString()}
                원
              </h3>
            </div>
            <button
              onClick={() => navigate("/OrderCheckout")}
              className={styles.purchaseButton}
            >
              {t.purchase}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
