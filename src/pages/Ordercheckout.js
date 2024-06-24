import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/Ordercheckout.module.css"; // Ensure the path is correct
import { useLanguage } from "../components/LanguageContext";

const translations = {
  KR: {
    shippingInfo: "배송 정보",
    deleteSelection: "선택삭제",
    orderer: "주문자",
    ordererName: "주문자 이름",
    phoneNumber: "전화번호",
    email: "이메일",
    sameAsMemberInfo: "회원 정보와 동일",
    newAddress: "새로운 배송지",
    addressList: "배송지 목록",
    defaultAddress: "기본 주소",
    newAddressOption: "새로운 배송지",
    receiverName: "수령자 명",
    searchAddress: "주소 검색",
    addressDetailPlaceholder: "상세주소를 입력해주세요.",
    addToAddressList: "배송지 목록에 추가",
    couponDiscount: "쿠폰/할인",
    coupon: "쿠폰",
    useCoupon: "사용 가능한 쿠폰 0장",
    confirm: "확인",
    discountCode: "할인코드",
    orderSummary: "주문 예상 금액",
    totalProductPrice: "총 상품금액",
    totalShipping: "총 배송비",
    totalDiscount: "총 할인금액",
    totalAmount: "합계",
    agreeTerms: "본인은 웹사이트 이용 약관을(를) 읽었으며 이에 동의합니다",
    cardPayment: "카드 결제",
    kakaoPay: "카카오페이 결제",
    naverPay: "네이버페이 결제",
    paypal: "PayPal 결제",
    checkoutStep: "장바구니 → 주문/결제 → 결제완료",
    stepOrder: "주문/결제",
  },
  EN: {
    shippingInfo: "Shipping Information",
    deleteSelection: "Delete Selection",
    orderer: "Orderer",
    ordererName: "Orderer Name",
    phoneNumber: "Phone Number",
    email: "Email",
    sameAsMemberInfo: "Same as Member Info",
    newAddress: "New Address",
    addressList: "Address List",
    defaultAddress: "Default Address",
    newAddressOption: "New Address",
    receiverName: "Receiver Name",
    searchAddress: "Search Address",
    addressDetailPlaceholder: "Please enter the detailed address.",
    addToAddressList: "Add to Address List",
    couponDiscount: "Coupon/Discount",
    coupon: "Coupon",
    useCoupon: "Use available coupon 0",
    confirm: "Confirm",
    discountCode: "Discount Code",
    orderSummary: "Order Summary",
    totalProductPrice: "Total Product Price",
    totalShipping: "Total Shipping",
    totalDiscount: "Total Discount",
    totalAmount: "Total Amount",
    agreeTerms: "I have read and agree to the website terms of use",
    cardPayment: "Card Payment",
    kakaoPay: "KakaoPay",
    naverPay: "NaverPay",
    paypal: "PayPal",
    checkoutStep: "Cart → Order/Payment → Payment Complete",
    stepOrder: "Order/Payment",
  },
};

function OrderCheckout() {
  const [sameAsMemberInfo, setSameAsMemberInfo] = useState(false);
  const [newAddress, setNewAddress] = useState(false);
  const [zonecode, setZonecode] = useState("");
  const [roadAddress, setRoadAddress] = useState("");
  const [roadAddressDetail, setRoadAddressDetail] = useState("");
  const [emailDomain, setEmailDomain] = useState("naver.com");
  const [customEmailDomain, setCustomEmailDomain] = useState("");
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];

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
    <div className={styles.container}>
      <div className={styles.orderContainer}>
        <div className={styles.orderHeader}>
          <h3>{t.shippingInfo}</h3>
          <label className={styles.deleteSelection}>
            <input type="checkbox" />
            {t.deleteSelection}
          </label>
        </div>
        <div className={styles.orderContent}>
          <div className={styles.orderSection}>
            <h3>{t.orderer}</h3>
            <label className={styles.label}>
              {t.ordererName}
              <input type="text" className={styles.ordererNameInput} />
            </label>
            <label className={styles.label}>
              {t.phoneNumber}
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
                <input type="text" className={styles.phoneNumberInput} />
                <input type="text" className={styles.phoneNumberInput} />
              </div>
            </label>
            <label className={styles.label}>
              {t.email}
              <div className={styles.emailInputContainer}>
                <input
                  type="text"
                  className={styles.emailInput}
                  placeholder={t.email}
                />
                <span>@</span>
                <input
                  type="text"
                  className={styles.emailInput}
                  placeholder={emailDomain}
                  disabled={emailDomain !== "custom"}
                />
              </div>
            </label>
            <label className={styles.label}>
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
            </label>
          </div>
          <div className={styles.orderSection}>
            <h3>{t.addressList}</h3>
            <label className={styles.label}>
              <div className={styles.checkboxContainer}>
                <label className={styles.doubleCheckbox}>
                  <input
                    type="checkbox"
                    checked={sameAsMemberInfo}
                    onChange={handleSameAsMemberInfo}
                  />
                  {t.sameAsMemberInfo}
                </label>
                <label
                  className={`${styles.doubleCheckbox} ${styles.marginLeft}`}
                >
                  <input
                    type="checkbox"
                    checked={newAddress}
                    onChange={handleNewAddress}
                  />
                  {t.newAddress}
                </label>
              </div>
            </label>
            <label className={styles.label}>
              {t.addressList}
              <select className={styles.addressListSelect}>
                <option value="default">{t.defaultAddress}</option>
                <option value="new">{t.newAddressOption}</option>
              </select>
            </label>
            <label className={styles.label}>
              {t.receiverName}
              <input type="text" className={styles.receiverNameInput} />
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
                {t.searchAddress}
              </button>
            </div>
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
                placeholder={t.addressDetailPlaceholder}
                value={roadAddressDetail}
                onChange={(e) => setRoadAddressDetail(e.target.value)}
              />
            </label>
            <label className={styles.smallCheckbox}>
              <input
                type="checkbox"
                className={styles.addToAddressListCheckbox}
              />
              {t.addToAddressList}
            </label>
          </div>
          <div
            className={`${styles.orderSection} ${styles.couponDiscountContainer}`}
          >
            <h3>{t.couponDiscount}</h3>
            <label className={styles.label}>
              {t.coupon}
              <div className={styles.couponConatiner}>
                <select className={styles.couponSelect}>
                  <option value="0">{t.useCoupon}</option>
                  <option value="10">10% {t.coupon}</option>
                </select>
                <button className={styles.couponButton}>{t.confirm}</button>
              </div>
            </label>
            <label className={styles.label}>
              {t.discountCode}
              <div className={styles.couponConatiner}>
                <input type="text" className={styles.discountCodeInput} />
                <button className={styles.couponButton}>{t.confirm}</button>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className={styles.paymentContainer}>
        <div className={styles.paymentHeader}>
          <span className={styles.checkoutStep}>{t.checkoutStep}</span>
        </div>
        <div className={styles.orderSummary}>
          <h3>{t.orderSummary}</h3>
          <p>{`${t.totalProductPrice}: 120,000원`}</p>
          <p>{`${t.totalShipping}: 0원`}</p>
          <p>{`${t.totalDiscount}: 0원`}</p>
          <h3>{`${t.totalAmount}: 120,000원`}</h3>
          <label>
            <input type="checkbox" className={styles.termsCheckbox} />
            <span>{t.agreeTerms}</span>
          </label>
          <div className={styles.paymentButtons}>
            <button
              className={`${styles.payButton} ${styles.card}`}
              onClick={handlePayment}
            >
              {t.cardPayment}
            </button>
            <div className={styles.smallButtons}>
              <button
                className={`${styles.payButton} ${styles.kakaopay}`}
                onClick={handlePayment}
              >
                {t.kakaoPay}
              </button>
              <button
                className={`${styles.payButton} ${styles.naverpay}`}
                onClick={handlePayment}
              >
                {t.naverPay}
              </button>
              <button
                className={`${styles.payButton} ${styles.paypal}`}
                onClick={handlePayment}
              >
                {t.paypal}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCheckout;
