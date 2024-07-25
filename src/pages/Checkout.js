// Checkout.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/Checkout.module.css";
import BackButton from "../components/BackButton";
import { useLanguage } from "../components/LanguageContext";
import { getCartItems, removeFromCart } from "../components/apiClient";
import { useUser } from "../components/UserContext"; // UserContext 사용

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
  const { user } = useUser(); // 유저 정보 가져오기
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      if (user) {
        try {
          const data = await getCartItems(user.id); // 유저 ID 사용
          setCartItems(data);
        } catch (error) {
          console.error("Error fetching cart items:", error);
        }
      }
    };

    fetchCartItems();
  }, [user]);

  const handleSelectAll = () => {
    if (selectedItems.length === cartItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cartItems.map((item) => item.id));
    }
  };

  const handleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleRemoveSelectedItems = async () => {
    try {
      for (const itemId of selectedItems) {
        await removeFromCart(user.id, itemId); // 유저 ID 사용
      }
      setCartItems(
        cartItems.filter((item) => !selectedItems.includes(item.id))
      );
      setSelectedItems([]);
    } catch (error) {
      console.error("Error removing items from cart:", error);
    }
  };

  const calculateTotalAmount = () => {
    return cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toLocaleString();
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
                checked={selectedItems.length === cartItems.length}
                onChange={handleSelectAll}
              />
              <span>
                {t.selectAll} ({selectedItems.length}/{cartItems.length})
              </span>
            </label>
            <button
              className={styles.chooseDelete}
              onClick={handleRemoveSelectedItems}
            >
              {t.deleteSelected}
            </button>
          </div>
          <section className={styles.checkoutItemsSection}>
            {cartItems.map((item) => (
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
                    <p className={styles.itemPrice}>
                      {item.price.toLocaleString()}원
                    </p>
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
              <p>{calculateTotalAmount()}원</p>
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
                {t.total}: {calculateTotalAmount()}원
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
