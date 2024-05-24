import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Checkout.css"; // Ensure the path is correct

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
    <div className="checkout-container">
      <div className="checkout-header">
        <h2>장바구니</h2>
      </div>
      <div className="checkout-content">
        <div className="checkout-items-container">
          <div className="checkout-item-header">
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
          <section className="checkout-items-section">
            {items.map((item) => (
              <div className="checkout-item-container" key={item.id}>
                <input
                  type="checkbox"
                  className="item-checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => handleSelectItem(item.id)}
                />
                <div className="checkout-item">
                  <div className="item-details">
                    <p className="item-name">{item.name}</p>
                    <p className="item-price">{item.price}</p>
                    {item.options.map((option, index) => (
                      <p key={index} className="item-option">
                        {option}
                      </p>
                    ))}
                  </div>
                  <div className="image-placeholder"></div>
                </div>
              </div>
            ))}
          </section>
        </div>
        <div className="checkout-summary">
          <span className="checkout-step">
            <span className="red-text">장바구니</span> → 주문/결제 → 결제완료
          </span>
          <h3>주문 예상 금액</h3>
          <p>
            총 상품금액:{" "}
            {items
              .reduce(
                (acc, item) => acc + parseInt(item.price.replace(/,/g, "")),
                0
              )
              .toLocaleString()}
            원
          </p>
          <p>총 배송비: 0원</p>
          <p>총 할인금액: 0원</p>
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
          <Link to="/OrderCheckout" className="purchase-button">
            구매하기
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
