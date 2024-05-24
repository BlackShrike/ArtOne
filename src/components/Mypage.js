import React from "react";
import "../css/Mypage.css"; // Ensure the path is correct

function MyPage() {
  return (
    <div className="mypage-container">
      <nav className="sidebar">
        <h2>마이페이지</h2>
        <ul>
          <li>최근 본 상품</li>
          <li>장바구니</li>
          <li>정보수정</li>
          <li>쿠폰</li>
        </ul>
      </nav>
      <div className="main-content">
        <div className="user-info">
          <div className="user-info-header">
            <span>아트딜러명: BALCK</span>
            <button>></button>
          </div>
          <div className="user-info-cards">
            <div className="user-info-card">
              <span>최근 본 상품</span>
              <span>14개</span>
            </div>
            <div className="user-info-card">
              <span>장바구니</span>
              <span>14개</span>
            </div>
            <div className="user-info-card">
              <span>쿠폰</span>
              <span>2개</span>
            </div>
            <div className="user-info-card">
              <span>아트딜러명함</span>
              <span>cmyk</span>
            </div>
          </div>
        </div>
        <div className="order-status">
          <h3>배송중</h3>
          <div className="order-item">
            <p>시그니처 헤더십</p>
            <p>
              작품명 작품명 작품명 작품명 작품명 작품명 작품명 작품명 작품명
              작품명 작품명 작품명
            </p>
            <p>120,000원</p>
          </div>
          <div className="order-item">
            <p>시그니처 헤더십</p>
            <p>
              작품명 작품명 작품명 작품명 작품명 작품명 작품명 작품명 작품명
              작품명 작품명 작품명
            </p>
            <p>120,000원</p>
          </div>
        </div>
        <div className="order-status">
          <h3>배송완료</h3>
          <div className="order-item">
            <p>시그니처 헤더십</p>
            <p>
              작품명 작품명 작품명 작품명 작품명 작품명 작품명 작품명 작품명
              작품명 작품명 작품명
            </p>
            <p>120,000원</p>
          </div>
          <div className="order-item">
            <p>시그니처 헤더십</p>
            <p>
              작품명 작품명 작품명 작품명 작품명 작품명 작품명 작품명 작품명
              작품명 작품명 작품명
            </p>
            <p>120,000원</p>
          </div>
          <div className="order-item">
            <p>시그니처 헤더십</p>
            <p>
              작품명 작품명 작품명 작품명 작품명 작품명 작품명 작품명 작품명
              작품명 작품명 작품명
            </p>
            <p>120,000원</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
