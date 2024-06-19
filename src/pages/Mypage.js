import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import styles from "../css/Mypage.module.css"; // Ensure the path is correct
import { useLanguage } from "../components/LanguageContext";

const translations = {
  KR: {
    myPage: "마이페이지",
    recentViewed: "최근 본 상품",
    cart: "장바구니",
    updateInfo: "정보수정",
    coupon: "쿠폰",
    membership: "아트멤버십 혜택",
    main: "메인",
    recentProducts: "최근 본 상품",
    cartItems: "장바구니",
    coupons: "쿠폰",
    membershipCard: "아트딜러명함",
    inDelivery: "배송중",
    delivered: "배송완료",
    title: "제목",
    productInfo: "상품 정보",
    amount: "금액",
    select: "선택",
    price: "가격",
    payButton: "결제하기",
    paginationPrev: "<",
    paginationNext: ">",
    membershipBenefits: "아트멤버십 혜택",
    memberStatus: "현재, 정성민님은",
    memberStatusSuffix: "회원입니다",
    white: "White",
    cian: "Cian",
    magenta: "Magenta",
    yellow: "Yellow",
    black: "Black",
    userInfo: "유저 정보",
    userInfoCards: {
      recentProducts: "최근 본 상품",
      cartItems: "장바구니",
      coupons: "쿠폰",
      membershipCard: "아트딜러명함",
    },
    updateInfoForm: {
      username: "아이디",
      password: "비밀번호",
      confirmPassword: "비밀번호 확인",
      email: "이메일",
      name: "이름",
      phone: "전화번호",
      birthday: {
        year: "년",
        month: "월",
        day: "일",
      },
      address: {
        zipCode: "우편번호",
        basicAddress: "기본주소",
        detailedAddress: "상세주소",
      },
      searchAddress: "주소검색",
      confirmButton: "확인",
    },
  },
  EN: {
    myPage: "My Page",
    recentViewed: "Recently Viewed",
    cart: "Cart",
    updateInfo: "Update Info",
    coupon: "Coupons",
    membership: "Art Membership Benefits",
    main: "Main",
    recentProducts: "Recent Products",
    cartItems: "Cart Items",
    coupons: "Coupons",
    membershipCard: "Membership Card",
    inDelivery: "In Delivery",
    delivered: "Delivered",
    title: "Title",
    productInfo: "Product Info",
    amount: "Amount",
    select: "Select",
    price: "Price",
    payButton: "Pay",
    paginationPrev: "<",
    paginationNext: ">",
    membershipBenefits: "Art Membership Benefits",
    memberStatus: "Currently, you are a",
    memberStatusSuffix: "member",
    white: "White",
    cian: "Cian",
    magenta: "Magenta",
    yellow: "Yellow",
    black: "Black",
    userInfo: "User Info",
    userInfoCards: {
      recentProducts: "Recent Products",
      cartItems: "Cart Items",
      coupons: "Coupons",
      membershipCard: "Membership Card",
    },
    updateInfoForm: {
      username: "Username",
      password: "Password",
      confirmPassword: "Confirm Password",
      email: "Email",
      name: "Name",
      phone: "Phone Number",
      birthday: {
        year: "Year",
        month: "Month",
        day: "Day",
      },
      address: {
        zipCode: "Zip Code",
        basicAddress: "Basic Address",
        detailedAddress: "Detailed Address",
      },
      searchAddress: "Search Address",
      confirmButton: "Confirm",
    },
  },
};

function MyPage() {
  const [selectedSection, setSelectedSection] = useState("main");
  const [membership, setMembership] = useState("White");
  const [selectedColor, setSelectedColor] = useState("white");
  const { language } = useLanguage();
  const t = translations[language];

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
            <h2>{t.recentViewed}</h2>
            <table className={styles.recentViewedTable}>
              <thead>
                <tr>
                  <th>{t.title}</th>
                  <th>{t.productInfo}</th>
                  <th>{t.price}</th>
                  <th>{t.select}</th>
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
                        <button className={styles.payButton}>
                          {t.payButton}
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={styles.pagination}>
              <span>{t.paginationPrev}</span>
              {[...Array(15).keys()].map((number) => (
                <span key={number + 1} className={styles.pageNumber}>
                  {number + 1}
                </span>
              ))}
              <span>{t.paginationNext}</span>
            </div>
          </div>
        );
      case "updateInfo":
        return (
          <div className={styles.updateInfoContainer}>
            <h2>{t.updateInfo}</h2>
            <form className={styles.updateInfoForm}>
              <label>
                {t.updateInfoForm.username}
                <input type="text" />
              </label>
              <label>
                {t.updateInfoForm.password}
                <input type="password" />
              </label>
              <label>
                {t.updateInfoForm.confirmPassword}
                <input type="password" />
              </label>
              <label>
                {t.updateInfoForm.email}
                <input type="email" />
              </label>
              <label>
                {t.updateInfoForm.name}
                <input type="text" />
              </label>
              <label>
                {t.updateInfoForm.phone}
                <div className={styles.phoneNumber}>
                  <input type="text" />
                  <span>-</span>
                  <input type="text" />
                  <span>-</span>
                  <input type="text" />
                </div>
              </label>
              <label>
                {t.updateInfoForm.birthday}
                <div className={styles.birthday}>
                  <input
                    type="text"
                    placeholder={t.updateInfoForm.birthday.year}
                  />
                  <input
                    type="text"
                    placeholder={t.updateInfoForm.birthday.month}
                  />
                  <input
                    type="text"
                    placeholder={t.updateInfoForm.birthday.day}
                  />
                </div>
              </label>
              <label>
                {t.updateInfoForm.address}
                <div className={styles.address}>
                  <div className={styles.zipCodeRow}>
                    <input
                      type="text"
                      placeholder={t.updateInfoForm.address.zipCode}
                    />
                    <button
                      type="button"
                      className={styles.searchAddressButton}
                    >
                      {t.updateInfoForm.address.searchAddress}
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder={t.updateInfoForm.address.basicAddress}
                  />
                  <input
                    type="text"
                    placeholder={t.updateInfoForm.address.detailedAddress}
                  />
                </div>
              </label>
              <button type="submit" className={styles.submitButton}>
                {t.updateInfoForm.confirmButton}
              </button>
            </form>
          </div>
        );
      case "coupon":
        return (
          <div className={styles.couponContainer}>
            <h2>{t.coupon}</h2>
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
            <h2>{t.membershipBenefits}</h2>
            <p>{`${t.memberStatus} ${membership} ${t.memberStatusSuffix}`}</p>
            <div className={styles.membershipLevels}>
              {["White", "Cian", "Magenta", "Yellow", "Black"].map(
                (level, index) => {
                  const isSelected = membership === level;
                  return (
                    <div
                      key={level}
                      className={`${styles.membershipLevel} ${
                        isSelected ? styles.selected : ""
                      } ${styles[level.toLowerCase()]}`}
                      onClick={() => handleMembershipClick(level)}
                      style={{
                        height: `${50 + index * 20}px`,
                        color: isSelected ? "white" : "black",
                        backgroundColor: isSelected ? "black" : "transparent",
                      }}
                    >
                      <div
                        className={styles.squareBox}
                        style={{ backgroundColor: getColor(level) }}
                      ></div>
                      {t[level.toLowerCase()]}
                    </div>
                  );
                }
              )}
            </div>
            <div className={styles.membershipBenefits}>
              <div className={`${styles.benefit} ${styles.white}`}>
                <h3>{t.white}</h3>
                <p>구매 누적금액 50만원 이상</p>
                <p>10% 할인권 제공 (월간 적용금액 15만원 미만)</p>
              </div>
              <div className={`${styles.benefit} ${styles.cian}`}>
                <h3>{t.cian}</h3>
                <p>구매 누적금액 100만원 이상</p>
                <p>10% 할인권 2장 제공 (월간 적용금액 15만원 미만)</p>
              </div>
              <div className={`${styles.benefit} ${styles.magenta}`}>
                <h3>{t.magenta}</h3>
                <p>구매 누적금액 100만원 이상</p>
                <p>10% 할인권 2장 제공 (월간 적용금액 15만원 미만)</p>
                <p>생일쿠폰 제공 (10% 할인/적용금액 15만원 미만)</p>
              </div>
              <div className={`${styles.benefit} ${styles.yellow}`}>
                <h3>{t.yellow}</h3>
                <p>구매 누적금액 100만원 이상</p>
                <p>10% 할인권 2장 제공 (월간 적용금액 15만원 미만)</p>
                <p>생일쿠폰 제공 (10% 할인/적용금액 15만원 미만)</p>
                <p>상시쿠폰 10% 할인/적용금액 15만원 미만)</p>
              </div>
              <div className={`${styles.benefit} ${styles.black}`}>
                <h3>{t.black}</h3>
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
                  {t.userInfoCards.membershipCard}:{" "}
                  <span
                    className={styles.clickable}
                    onClick={() => setSelectedSection("membership")}
                  >
                    {membership}
                  </span>
                </span>
                <FaArrowRight
                  onClick={() => setSelectedSection("membership")}
                />
              </div>
              <div className={styles.userInfoCards}>
                <div className={styles.userInfoCard}>
                  <span>{t.userInfoCards.recentProducts}</span>
                  <span>14개</span>
                </div>
                <div className={styles.userInfoCard}>
                  <span>{t.userInfoCards.cartItems}</span>
                  <span>14개</span>
                </div>
                <div className={styles.userInfoCard}>
                  <span>{t.userInfoCards.coupons}</span>
                  <span>2개</span>
                </div>
                <div className={styles.userInfoCard}>
                  <span>{t.userInfoCards.membershipCard}</span>
                  <span>cmyk</span>
                </div>
              </div>
            </div>
            <div className={styles.orderStatus}>
              <h3>{t.inDelivery}</h3>
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
              <h3>{t.delivered}</h3>
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
        <h2 onClick={() => setSelectedSection("")}>{t.myPage}</h2>
        <ul>
          <li onClick={() => setSelectedSection("recentViewed")}>
            {t.recentViewed}
          </li>
          <li>{t.cart}</li>
          <li onClick={() => setSelectedSection("updateInfo")}>
            {t.updateInfo}
          </li>
          <li onClick={() => setSelectedSection("coupon")}>{t.coupon}</li>
        </ul>
      </nav>
      <div className={styles.mainContent}>{renderContent()}</div>
    </div>
  );
}

export default MyPage;
