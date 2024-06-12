import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/Ordercheckout.module.css"; // Ensure the path is correct

function OrderCheckout() {
  const [sameAsMemberInfo, setSameAsMemberInfo] = useState(false);
  const [newAddress, setNewAddress] = useState(false);
  const [zonecode, setZonecode] = useState("");
  const [roadAddress, setRoadAddress] = useState("");
  const [roadAddressDetail, setRoadAddressDetail] = useState("");
  const [emailDomain, setEmailDomain] = useState("naver.com");
  const [customEmailDomain, setCustomEmailDomain] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Load the Daum Postcode script
    const script = document.createElement("script");
    script.src =
      "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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

  const onClickSearch = () => {
    new window.daum.Postcode({
      oncomplete: function (data) {
        setZonecode(data.zonecode);
        setRoadAddress(data.address);
      },
    }).open();
  };

  const handleEmailDomainChange = (e) => {
    setEmailDomain(e.target.value);
    setCustomEmailDomain("");
  };

  return (
    <div className={styles.orderCheckoutContainer}>
      <div className={styles.orderHeader}>
        <div className={styles.orderInfoHeader}>
          <h3>배송 정보</h3>
          <label className={styles.deleteSelection}>
            <input type="checkbox" />
            <span>선택삭제</span>
          </label>
          <span className={styles.checkoutStep}>
            장바구니 → <span className={styles.redText}>주문/결제</span> →
            결제완료
          </span>
        </div>
      </div>
      <div className={styles.orderContent}>
        <div className={styles.orderForm}>
          <div className={styles.orderSection}>
            <h3>주문자</h3>
            <label className={styles.label}>
              주문자 이름
              <input type="text" />
            </label>
            <label className={styles.label}>
              전화번호
              <input type="text" />
            </label>
            <label className={styles.label}>
              이메일
              <div className={styles.emailInputContainer}>
                <input
                  type="text"
                  className={styles.emailInput}
                  placeholder="이메일 아이디"
                />
                <span>@</span>
                {emailDomain === "custom" ? (
                  <input
                    type="text"
                    className={styles.customEmailInput}
                    placeholder="직접 입력"
                    value={customEmailDomain}
                    onChange={(e) => setCustomEmailDomain(e.target.value)}
                  />
                ) : (
                  <select
                    value={emailDomain}
                    onChange={handleEmailDomainChange}
                    className={styles.emailSelect}
                  >
                    <option value="naver.com">naver.com</option>
                    <option value="daum.net">daum.net</option>
                    <option value="gmail.com">gmail.com</option>
                    <option value="hotmail.com">hotmail.com</option>
                    <option value="yahoo.com">yahoo.com</option>
                    <option value="custom">직접 입력</option>
                  </select>
                )}
              </div>
            </label>
          </div>
          <div className={styles.orderSection}>
            <h3>배송지</h3>
            <label className={styles.label}>
              <span></span> {/* 빈 span 추가 */}
              <div className={styles.checkboxContainer}>
                <label className={styles.smallCheckbox}>
                  <input
                    type="checkbox"
                    checked={sameAsMemberInfo}
                    onChange={handleSameAsMemberInfo}
                  />
                  회원 정보와 동일
                </label>
                <label
                  className={`${styles.smallCheckbox} ${styles.marginLeft}`}
                >
                  <input
                    type="checkbox"
                    checked={newAddress}
                    onChange={handleNewAddress}
                  />
                  새로운 배송지
                </label>
              </div>
            </label>
            <label className={styles.label}>
              배송지 목록
              <select>
                <option>기본 주소</option>
                <option>새로운 배송지</option>
              </select>
            </label>
            <label className={styles.label}>
              수령자 명
              <input type="text" />
            </label>
            <label className={styles.label}>
              전화번호
              <div className={styles.phoneNumberContainer}>
                <select className={styles.phoneNumberSelect}>
                  <option value="010">010</option>
                  <option value="011">011</option>
                  <option value="016">016</option>
                  <option value="017">017</option>
                  <option value="018">018</option>
                  <option value="019">019</option>
                  <option value="custom">직접 입력</option>
                </select>
                <input type="text" className={styles.phoneNumberInput1} />
                <input type="text" className={styles.phoneNumberInput2} />
              </div>
            </label>
            <div className={styles.addressSearchContainer}>
              <input
                type="text"
                className={styles.zoneCodeInput}
                placeholder=""
                value={zonecode}
                disabled
              />
              <button
                className={styles.addressSearchButton}
                id="search-btn"
                onClick={onClickSearch}
              >
                주소 검색
              </button>
            </div>
            <div className={styles.addressDetailContainer}>
              <label className={styles.label}>
                <input
                  type="text"
                  className={styles.roadAddressInput}
                  placeholder=""
                  value={roadAddress}
                  disabled
                />
              </label>
              <label className={styles.label}>
                <input
                  type="text"
                  className={styles.roadAddressDetailInput}
                  placeholder="상세주소를 입력해주세요."
                  value={roadAddressDetail}
                  onChange={(e) => setRoadAddressDetail(e.target.value)}
                />
              </label>
            </div>
            <label className={styles.addToListCheckbox}>
              <input type="checkbox" />
              배송지 목록에 추가
            </label>
          </div>
          <div className={styles.orderSection}>
            <h3>쿠폰/할인</h3>
            <label className={styles.label}>
              쿠폰
              <div className={styles.couponInputContainer}>
                <select className={styles.couponInput}>
                  <option>사용 가능한 쿠폰 0장</option>
                  <option>10% 할인 쿠폰</option>
                </select>
                <button className={styles.couponButton}>확인</button>
              </div>
            </label>
            <label className={styles.label}>
              할인코드
              <div className={styles.couponInputContainer}>
                <input type="text" className={styles.discountCodeInput} />
                <button className={styles.discountCodeButton}>확인</button>
              </div>
            </label>
          </div>
        </div>
        <div className={styles.orderSummary}>
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
          <div className={styles.paymentButtons}>
            <button
              className={`${styles.payButton} ${styles.card}`}
              onClick={handlePayment}
            >
              카드 결제
            </button>
            <div className={styles.smallButtons}>
              <button
                className={`${styles.payButton} ${styles.kakaopay}`}
                onClick={handlePayment}
              >
                카카오페이 결제
              </button>
              <button
                className={`${styles.payButton} ${styles.naverpay}`}
                onClick={handlePayment}
              >
                네이버페이 결제
              </button>
              <button
                className={`${styles.payButton} ${styles.paypal}`}
                onClick={handlePayment}
              >
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
