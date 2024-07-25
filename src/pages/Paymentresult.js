//Paymentresult.js
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
    ordererName: "주문자 이름",
    ordererNameContent: "홍길동",
    phoneNumber: "전화번호",
    phoneNumberContent: "010-0000-0000",
    email: "이메일",
    emailContent: "abcd@naver.com",
    recipient: "수령인",
    recipientName: "수령인",
    recipientNameContent: "홍길동",
    deliveryAddress: "배송주소",
    deliveryAddressContent: "00000 서울특별시 마포구 101동 1001호",
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
    ordererName: "Orderer Name",
    ordererNameContent: "Hong Gil Dong",
    phoneNumber: "Phone Number",
    phoneNumberContent: "010-0000-0000",
    email: "Email",
    emailContent: "abcd@naver.com",
    recipient: "Recipient",
    recipientName: "Recipient",
    recipientNameContent: "Hong Gil Dong",
    deliveryAddress: "Delivery Address",
    deliveryAddressContent: "00000 Seoul, Mapo-gu, Building 101, Unit 1001",
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
        <section className={styles.section}>
          <div className={styles.header}>
            <h3>{t.productInfo}</h3>
          </div>
          <div className={styles.center}>
            <div className={styles.centerItem}>
              <span>{t.productName}</span>
            </div>
            <div className={styles.centerItem}>
              <span>{t.price}</span>
            </div>
            <div className={styles.centerItem}>
              <span>{t.option1}</span>
            </div>
            <div className={styles.centerItem}>
              <span>{t.option2}</span>
            </div>
          </div>
          <div className={`${styles.right} ${styles.flex2}`}>
            <div className={styles.imagePlaceholder}></div>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.header}>
            <h3>{t.orderer}</h3>
          </div>
          <div className={styles.center}>
            <div className={styles.centerItem}>
              <span>{t.ordererName}</span>
            </div>
            <div className={styles.centerItem}>
              <span>{t.phoneNumber}</span>
            </div>
            <div className={styles.centerItem}>
              <span>{t.email}</span>
            </div>
          </div>
          <div className={`${styles.right} ${styles.flex2}`}>
            <span>{t.ordererNameContent}</span>
            <span>{t.phoneNumberContent}</span>
            <span>{t.emailContent}</span>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.header}>
            <h3>{t.recipient}</h3>
          </div>
          <div className={styles.center}>
            <div className={styles.centerItem}>
              <span>{t.recipientName}</span>
            </div>
            <div className={styles.centerItem}>
              <span>{t.phoneNumber}</span>
            </div>
            <div className={styles.centerItem}>
              <span>{t.deliveryAddress}</span>
            </div>
          </div>
          <div className={`${styles.right} ${styles.flex2}`}>
            <span>{t.recipientNameContent}</span>
            <span>{t.phoneNumberContent}</span>
            <span>{t.deliveryAddressContent}</span>
          </div>
        </section>
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
