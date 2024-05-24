import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Mypage.css"; // Ensure the path is correct

function MyPage() {
  const [selectedSection, setSelectedSection] = useState("main");

  const renderContent = () => {
    switch (selectedSection) {
      case "recentViewed":
        return (
          <div className="recent-viewed-container">
            <h2>최근 본 상품</h2>
            <table className="recent-viewed-table">
              <thead>
                <tr>
                  <th>이미지</th>
                  <th>상품 정보</th>
                  <th>금액</th>
                  <th>선택</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(5).keys()].map((_, index) => (
                  <tr key={index}>
                    <td>
                      <div className="image-placeholder"></div>
                    </td>
                    <td>
                      <p>시그니처 헤더십</p>
                      <p>
                        작품명 작품명 작품명 작품명 작품명 작품명 작품명 작품명
                        작품명 작품명 작품명 작품명
                      </p>
                    </td>
                    <td>49,500원</td>
                    <td>
                      <Link to="/Checkout">
                        <button className="pay-button">결제하기</button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pagination">
              <span>&lt;</span>
              {[...Array(15).keys()].map((number) => (
                <span key={number + 1} className="page-number">
                  {number + 1}
                </span>
              ))}
              <span>&gt;</span>
            </div>
          </div>
        );
      case "updateInfo":
        return (
          <div className="update-info-container">
            <h2>정보수정</h2>
            <form className="update-info-form">
              <label>
                아이디
                <input type="text" />
              </label>
              <label>
                비밀번호
                <input type="password" />
              </label>
              <label>
                비밀번호 확인
                <input type="password" />
              </label>
              <label>
                이메일
                <input type="email" />
              </label>
              <label>
                이름
                <input type="text" />
              </label>
              <label>
                전화번호
                <div className="phone-number">
                  <input type="text" />
                  <span>-</span>
                  <input type="text" />
                  <span>-</span>
                  <input type="text" />
                </div>
              </label>
              <label>
                생년월일
                <div className="birthday">
                  <input type="text" placeholder="년" />
                  <input type="text" placeholder="월" />
                  <input type="text" placeholder="일" />
                </div>
              </label>
              <label>
                주소
                <div className="address">
                  <div className="zip-code-row">
                    <input type="text" placeholder="우편번호" />
                    <button type="button" className="search-address-button">
                      주소검색
                    </button>
                  </div>
                  <input type="text" placeholder="기본주소" />
                  <input type="text" placeholder="상세주소" />
                </div>
              </label>
              <button type="submit" className="submit-button">
                확인
              </button>
            </form>
          </div>
        );
      case "coupon":
        return (
          <div className="coupon-container">
            <h2>쿠폰관리</h2>
            <form className="coupon-form">
              <label>
                쿠폰번호
                <div className="coupon-input-row">
                  <input type="text" />
                  <button type="button" className="coupon-register-button">
                    등록
                  </button>
                </div>
              </label>
              <h3 className="coupon-title">보유쿠폰</h3>
              <div className="owned-coupons">
                <div className="coupon">
                  <span>(쿠폰명)</span>
                </div>
                <div className="coupon">
                  <span>(쿠폰명)</span>
                </div>
              </div>
            </form>
            <div className="coupon-info">
              <h3>쿠폰 사용시 유의사항</h3>
              <p>
                상세내용 상세내용 상세내용 상세내용 상세내용 상세내용 상세내용
                상세내용 상세내용 상세내용 상세내용 상세내용 상세내용 상세내용
                상세내용 상세내용 상세내용 상세내용 상세내용 상세내용 상세내용
                상세내용 상세내용 상세내용 상세내용 상세내용 상세내용 상세내용
                상세내용 상세내용 상세내용 상세내용 상세내용 상세내용
              </p>
            </div>
          </div>
        );
      default:
        return (
          <>
            <div className="user-info">
              <div className="user-info-header">
                <span>아트딜러명: BALCK</span>
                <button></button>
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
                <h2>시그니처 헤더십</h2>
                <p>
                  작품명 작품명 작품명 작품명 작품명 작품명 작품명 작품명 작품명
                  작품명 작품명 작품명
                </p>
                <p>120,000원</p>
              </div>
              <div className="order-item">
                <h2>시그니처 헤더십</h2>
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
                <h2>시그니처 헤더십</h2>
                <p>
                  작품명 작품명 작품명 작품명 작품명 작품명 작품명 작품명 작품명
                  작품명 작품명 작품명
                </p>
                <p>120,000원</p>
              </div>
              <div className="order-item">
                <h2>시그니처 헤더십</h2>
                <p>
                  작품명 작품명 작품명 작품명 작품명 작품명 작품명 작품명 작품명
                  작품명 작품명 작품명
                </p>
                <p>120,000원</p>
              </div>
              <div className="order-item">
                <h2>시그니처 헤더십</h2>
                <p>
                  작품명 작품명 작품명 작품명 작품명 작품명 작품명 작품명 작품명
                  작품명 작품명 작품명
                </p>
                <p>120,000원</p>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="mypage-container">
      <nav className="sidebar">
        <h2>마이페이지</h2>
        <ul>
          <li onClick={() => setSelectedSection("recentViewed")}>
            최근 본 상품
          </li>
          <li>장바구니</li>
          <li onClick={() => setSelectedSection("updateInfo")}>정보수정</li>
          <li onClick={() => setSelectedSection("coupon")}>쿠폰</li>
        </ul>
      </nav>
      <div className="main-content">{renderContent()}</div>
    </div>
  );
}

export default MyPage;
