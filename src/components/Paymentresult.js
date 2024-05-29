import React from "react";
import styles from "../css/Paymentresult.module.css"; // Ensure the path is correct

function PaymentResult() {
  return (
    <div className={styles.paymentResultContainer}>
      <h2>결제가 완료되었습니다</h2>
      <p className={styles.thankYouMessage}>
        예쁘게 포장해서 최선을 다해 빠르게 보내 드리겠습니다 :)
      </p>
      <div className={styles.paymentDetails}>
        <div className={styles.section}>
          <h3>상품정보</h3>
          <p>상품명 예시(상세정보)</p>
          <p>120,000원</p>
          <p>옵션 1: 40 x 50 cm</p>
          <p>옵션 2: (프레임) 별도 열람(매장 표시)</p>
          <div className={styles.imagePlaceholder}></div>
        </div>
        <div className={styles.section}>
          <h3>주문자</h3>
          <p>주문자 이름: 홍길동</p>
          <p>전화번호: 010-0000-0000</p>
          <p>이메일: abcd@naver.com</p>
        </div>
        <div className={styles.section}>
          <h3>배송지</h3>
          <p>수령인: 홍길동</p>
          <p>전화번호: 010-0000-0000</p>
          <p>배송주소: 00000 서울특별시 마포구 101동 1001호</p>
        </div>
      </div>
      <div className={styles.deliveryNotes}>
        <h3>배송 유의사항</h3>
        <p className={styles.note}>1. 배송 유의사항 1</p>
        <p className={styles.note}>2. 배송 유의사항 2</p>
        <p className={styles.note}>3. 배송 유의사항 3</p>
      </div>
    </div>
  );
}

export default PaymentResult;
