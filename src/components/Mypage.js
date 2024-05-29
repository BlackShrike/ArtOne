import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import styles from "../css/Mypage.module.css"; // Ensure the path is correct

function MyPage() {
  const [selectedSection, setSelectedSection] = useState("main");
  const [membership, setMembership] = useState("White");
  const [selectedColor, setSelectedColor] = useState("white");

  const handleMembershipClick = (level) => {
    setMembership(level);
    setSelectedColor(getColor(level));
  };

  const getColor = (level) => {
    const colorMap = {
      White: "white",
      Cian: "#00bfff",
      Magenta: "#ff00ff",
      Yellow: "#ffff00",
      Black: "black",
    };
    return colorMap[level];
  };

  const textColor = membership === "White" ? "black" : "white";
  const userInfoBackgroundColor =
    membership === "White" ? "white" : selectedColor;

  const renderContent = () => {
    switch (selectedSection) {
      case "recentViewed":
        return (
          <div className={styles.recentViewedContainer}>
            <h2>최근 본 상품</h2>
            <table className={styles.recentViewedTable}>
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
                      <div className={styles.imagePlaceholder}></div>
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
                        <button className={styles.payButton}>결제하기</button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={styles.pagination}>
              <span>&lt;</span>
              {[...Array(15).keys()].map((number) => (
                <span key={number + 1} className={styles.pageNumber}>
                  {number + 1}
                </span>
              ))}
              <span>&gt;</span>
            </div>
          </div>
        );
      case "updateInfo":
        return (
          <div className={styles.updateInfoContainer}>
            <h2>정보수정</h2>
            <form className={styles.updateInfoForm}>
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
                <div className={styles.phoneNumber}>
                  <input type="text" />
                  <span>-</span>
                  <input type="text" />
                  <span>-</span>
                  <input type="text" />
                </div>
              </label>
              <label>
                생년월일
                <div className={styles.birthday}>
                  <input type="text" placeholder="년" />
                  <input type="text" placeholder="월" />
                  <input type="text" placeholder="일" />
                </div>
              </label>
              <label>
                주소
                <div className={styles.address}>
                  <div className={styles.zipCodeRow}>
                    <input type="text" placeholder="우편번호" />
                    <button
                      type="button"
                      className={styles.searchAddressButton}
                    >
                      주소검색
                    </button>
                  </div>
                  <input type="text" placeholder="기본주소" />
                  <input type="text" placeholder="상세주소" />
                </div>
              </label>
              <button type="submit" className={styles.submitButton}>
                확인
              </button>
            </form>
          </div>
        );
      case "coupon":
        return (
          <div className={styles.couponContainer}>
            <h2>쿠폰관리</h2>
            <form className={styles.couponForm}>
              <label>
                쿠폰번호
                <div className={styles.couponInputRow}>
                  <input type="text" />
                  <button type="button" className={styles.couponRegisterButton}>
                    등록
                  </button>
                </div>
              </label>
              <h3 className={styles.couponTitle}>보유쿠폰</h3>
              <div className={styles.ownedCoupons}>
                <div className={styles.coupon}>
                  <span>(쿠폰명)</span>
                </div>
                <div className={styles.coupon}>
                  <span>(쿠폰명)</span>
                </div>
              </div>
            </form>
            <div className={styles.couponInfo}>
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
      case "membership":
        return (
          <div className={styles.membershipContainer}>
            <h2>아트멤버십 혜택</h2>
            <p>현재, 정성민님은 {membership} 회원입니다</p>
            <div className={styles.membershipLevels}>
              {["White", "Cian", "Magenta", "Yellow", "Black"].map(
                (level, index) => {
                  const isBlackSelected =
                    level === "Black" && membership === level;
                  const levelColor = isBlackSelected ? "white" : "black";
                  return (
                    <div
                      key={level}
                      className={`${styles.membershipLevel} ${
                        membership === level ? styles.selected : ""
                      } ${styles[level.toLowerCase()]}`}
                      onClick={() => handleMembershipClick(level)}
                      style={{
                        height: `${50 + index * 20}px`,
                        color: levelColor,
                        backgroundColor:
                          membership === level
                            ? getColor(level)
                            : "transparent",
                      }}
                    >
                      <div
                        className={styles.squareBox}
                        style={{ backgroundColor: getColor(level) }}
                      ></div>
                      {level}
                    </div>
                  );
                }
              )}
            </div>
            <div className={styles.membershipBenefits}>
              <div className={`${styles.benefit} ${styles.white}`}>
                <h3>White</h3>
                <p>구매 누적금액 50만원 이상</p>
                <p>10% 할인권 제공 (월간 적용금액 15만원 미만)</p>
              </div>
              <div className={`${styles.benefit} ${styles.cian}`}>
                <h3>Cian</h3>
                <p>구매 누적금액 100만원 이상</p>
                <p>10% 할인권 2장 제공 (월간 적용금액 15만원 미만)</p>
              </div>
              <div className={`${styles.benefit} ${styles.magenta}`}>
                <h3>Magenta</h3>
                <p>구매 누적금액 100만원 이상</p>
                <p>10% 할인권 2장 제공 (월간 적용금액 15만원 미만)</p>
                <p>생일쿠폰 제공 (10% 할인/적용금액 15만원 미만)</p>
              </div>
              <div className={`${styles.benefit} ${styles.yellow}`}>
                <h3>Yellow</h3>
                <p>구매 누적금액 100만원 이상</p>
                <p>10% 할인권 2장 제공 (월간 적용금액 15만원 미만)</p>
                <p>생일쿠폰 제공 (10% 할인/적용금액 15만원 미만)</p>
                <p>상시쿠폰 10% 할인/적용금액 15만원 미만)</p>
              </div>
              <div className={`${styles.benefit} ${styles.black}`}>
                <h3>Black</h3>
                <p>구매 누적금액 100만원 이상</p>
                <p>10% 할인권 2장 제공 (월간 적용금액 15만원 미만)</p>
                <p>생일쿠폰 제공 (10% 할인/적용금액 15만원 미만)</p>
                <p>상시쿠폰 10% 할인/적용금액 15만원 미만)</p>
                <p>VIP 멤버쉽 선물 (연 4회 / 적립수 2회)</p>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <>
            <div className={styles.userInfo}>
              <div
                className={styles.userInfoHeader}
                style={{ backgroundColor: selectedColor, color: textColor }}
              >
                <span>
                  아트딜러명:{" "}
                  <span
                    className={styles.clickable}
                    onClick={() => setSelectedSection("membership")}
                  >
                    {membership}
                  </span>
                </span>
                <FaArrowRight />
              </div>
              <div className={styles.userInfoCards}>
                <div className={styles.userInfoCard}>
                  <span>최근 본 상품</span>
                  <span>14개</span>
                </div>
                <div className={styles.userInfoCard}>
                  <span>장바구니</span>
                  <span>14개</span>
                </div>
                <div className={styles.userInfoCard}>
                  <span>쿠폰</span>
                  <span>2개</span>
                </div>
                <div className={styles.userInfoCard}>
                  <span>아트딜러명함</span>
                  <span>cmyk</span>
                </div>
              </div>
            </div>
            <div className={styles.orderStatus}>
              <h3>배송중</h3>
              <div className={styles.orderItem}>
                <h2>시그니처 헤더십</h2>
                <p>
                  작품명 작품명 작품명 작품명 작품명 작품명 작품명 작품명 작품명
                  작품명 작품명 작품명
                </p>
                <p>120,000원</p>
              </div>
              <div className={styles.orderItem}>
                <h2>시그니처 헤더십</h2>
                <p>
                  작품명 작품명 작품명 작품명 작품명 작품명 작품명 작품명 작품명
                  작품명 작품명 작품명
                </p>
                <p>120,000원</p>
              </div>
            </div>
            <div className={styles.orderStatus}>
              <h3>배송완료</h3>
              <div className={styles.orderItem}>
                <h2>시그니처 헤더십</h2>
                <p>
                  작품명 작품명 작품명 작품명 작품명 작품명 작품명 작품명 작품명
                  작품명 작품명 작품명
                </p>
                <p>120,000원</p>
              </div>
              <div className={styles.orderItem}>
                <h2>시그니처 헤더십</h2>
                <p>
                  작품명 작품명 작품명 작품명 작품명 작품명 작품명 작품명 작품명
                  작품명 작품명 작품명
                </p>
                <p>120,000원</p>
              </div>
              <div className={styles.orderItem}>
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
    <div className={styles.mypageContainer}>
      <nav className={styles.sidebar}>
        <h2 onClick={() => setSelectedSection("")}>마이페이지</h2>
        <ul>
          <li onClick={() => setSelectedSection("recentViewed")}>
            최근 본 상품
          </li>
          <li>장바구니</li>
          <li onClick={() => setSelectedSection("updateInfo")}>정보수정</li>
          <li onClick={() => setSelectedSection("coupon")}>쿠폰</li>
        </ul>
      </nav>
      <div className={styles.mainContent}>{renderContent()}</div>
    </div>
  );
}

export default MyPage;
