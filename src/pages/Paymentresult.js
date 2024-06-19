import React from "react";
import styles from "../css/Paymentresult.module.css"; // Ensure the path is correct
import { useLanguage } from "../components/LanguageContext";

const translations = {
  KR: {
    paymentCompleted: "결제가 완료되었습니다",
    thankYouMessage: "예쁘게 포장해서 최선을 다해 빠르게 보내 드리겠습니다 :)",
    productInfo: "상품정보",
    productName: "상품명 예시(상세정보)",
    price: "120,000원",
    option1: "옵션 1: 40 x 50 cm",
    option2: "옵션 2: (프레임) 별도 열람(매장 표시)",
    orderer: "주문자",
    ordererName: "주문자 이름: 홍길동",
    phoneNumber: "전화번호: 010-0000-0000",
    email: "이메일: abcd@naver.com",
    recipient: "수령인",
    recipientName: "수령인: 홍길동",
    deliveryAddress: "배송주소: 00000 서울특별시 마포구 101동 1001호",
    deliveryNotes: "배송 유의사항",
    note1: "1. 배송 유의사항 1",
    note2: "2. 배송 유의사항 2",
    note3: "3. 배송 유의사항 3",
  },
  EN: {
    paymentCompleted: "Payment Completed",
    thankYouMessage:
      "We will wrap it beautifully and do our best to send it quickly :)",
    productInfo: "Product Information",
    productName: "Product Name Example (Details)",
    price: "$120.00",
    option1: "Option 1: 40 x 50 cm",
    option2: "Option 2: (Frame) View separately (Display in store)",
    orderer: "Orderer",
    ordererName: "Orderer Name: Hong Gil Dong",
    phoneNumber: "Phone Number: 010-0000-0000",
    email: "Email: abcd@naver.com",
    recipient: "Recipient",
    recipientName: "Recipient: Hong Gil Dong",
    deliveryAddress:
      "Delivery Address: 00000 Seoul, Mapo-gu, Building 101, Unit 1001",
    deliveryNotes: "Delivery Notes",
    note1: "1. Delivery Note 1",
    note2: "2. Delivery Note 2",
    note3: "3. Delivery Note 3",
  },
};

function PaymentResult() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className={styles.paymentResultContainer}>
      <h2>{t.paymentCompleted}</h2>
      <p className={styles.thankYouMessage}>{t.thankYouMessage}</p>
      <div className={styles.paymentDetails}>
        <div className={styles.section}>
          <h3>{t.productInfo}</h3>
          <p>{t.productName}</p>
          <p>{t.price}</p>
          <p>{t.option1}</p>
          <p>{t.option2}</p>
          <div className={styles.imagePlaceholder}></div>
        </div>
        <div className={styles.section}>
          <h3>{t.orderer}</h3>
          <p>{t.ordererName}</p>
          <p>{t.phoneNumber}</p>
          <p>{t.email}</p>
        </div>
        <div className={styles.section}>
          <h3>{t.recipient}</h3>
          <p>{t.recipientName}</p>
          <p>{t.phoneNumber}</p>
          <p>{t.deliveryAddress}</p>
        </div>
      </div>
      <div className={styles.deliveryNotes}>
        <h3>{t.deliveryNotes}</h3>
        <p className={styles.note}>{t.note1}</p>
        <p className={styles.note}>{t.note2}</p>
        <p className={styles.note}>{t.note3}</p>
      </div>
    </div>
  );
}

export default PaymentResult;
