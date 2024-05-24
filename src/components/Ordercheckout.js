import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../css/Ordercheckout.css"; // Ensure the path is correct

function OrderCheckout() {
  const [sameAsMemberInfo, setSameAsMemberInfo] = useState(false);
  const [newAddress, setNewAddress] = useState(false);
  const navigate = useNavigate();
  const handleSameAsMemberInfo = () => {
    setSameAsMemberInfo(!sameAsMemberInfo);
    if (newAddress && !sameAsMemberInfo) {
      setNewAddress(false);
    }
  };

  const handleNewAddress = () => {
    setNewAddress(!newAddress);
    if (sameAsMemberInfo && !newAddress) {
      setSameAsMemberInfo(false);
    }
  };
  const handlePayment = () => {
    navigate("/Paymentresult");
  };

  return (
    <div className="order-checkout-container">
      <div className="order-header">
        <div className="order-info-header">
          <h3>배송 정보</h3>
          <label className="delete-selection">
            <input type="checkbox" />
            <span>선택삭제</span>
          </label>
          <span className="checkout-step">
            장바구니 → <span className="red-text">주문/결제</span> → 결제완료
          </span>
        </div>
      </div>
      <div className="order-content">
        <div className="order-form">
          <h3>주문자</h3>
          <div className="order-section">
            <label>
              주문자 이름
              <input type="text" />
            </label>
            <label>
              전화번호
              <input type="text" />
            </label>
            <label>
              이메일
              <select>
                <option>이메일 선택</option>
                <option>naver.com</option>
                <option>daum.net</option>
                <option>gmail.com</option>
              </select>
            </label>
          </div>
          <div className="order-section">
            <h3>배송지</h3>
            <div className="checkbox-container">
              <label>
                <input
                  type="checkbox"
                  checked={sameAsMemberInfo}
                  onChange={handleSameAsMemberInfo}
                />
                회원 정보와 동일
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={newAddress}
                  onChange={handleNewAddress}
                />
                새로운 배송지
              </label>
            </div>
            <label>
              배송지 목록
              <select>
                <option>기본 주소</option>
                <option>새로운 배송지</option>
              </select>
            </label>
            <label>
              수령자 명
              <input type="text" />
            </label>
            <label>
              전화번호
              <input type="text" />
            </label>
            <label>
              우편번호
              <input type="text" />
            </label>
            <label>
              주소
              <input type="text" />
            </label>
            <label>
              상세주소
              <input type="text" />
            </label>
          </div>
          <div className="order-section">
            <h3>쿠폰/할인</h3>
            <label>
              쿠폰
              <select>
                <option>사용 가능한 쿠폰 0장</option>
                <option>10% 할인 쿠폰</option>
              </select>
              <button>확인</button>
            </label>
            <label>
              할인코드
              <input type="text" />
              <button>확인</button>
            </label>
          </div>
        </div>
        <div className="order-summary">
          <h3>주문 예상 금액</h3>
          <p>총 상품금액: 120,000원</p>
          <p>총 배송비: 0원</p>
          <p>총 할인금액: 0원</p>
          <h3>합계: 120,000원</h3>
          <label>
            <input type="checkbox" />
            <span>
              본인은 웹사이트 이용 약관을(를) 읽었으며 이에 동의합니다
            </span>
          </label>
          <div className="payment-buttons">
            <button className="pay-button card" onClick={handlePayment}>
              카드 결제
            </button>
            <div className="small-buttons">
              <button className="pay-button kakaopay" onClick={handlePayment}>
                카카오페이 결제
              </button>
              <button className="pay-button naverpay" onClick={handlePayment}>
                네이버페이 결제
              </button>
              <button className="pay-button paypal" onClick={handlePayment}>
                PayPal 결제
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCheckout;
