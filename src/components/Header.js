import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { PiShoppingCart } from "react-icons/pi";
import styles from "../css/Header.module.css";
import { useLanguage } from "./LanguageContext";

const translations = {
  KR: {
    mypage: "마이페이지",
    recentViewed: "최근 본 상품",
    updateInfo: "정보 수정",
    coupon: "쿠폰",
    cart: "장바구니",
    logout: "로그아웃",
    login: "로그인",
    signup: "회원가입",
    promotion: "프로모션",
    signature: "시그니처",
    original: "오리지널",
    artist: "아티스트",
    business: "비즈니스",
    review: "리뷰",
    faq: "FAQ",
    all: "전체",
    person: "인물",
    landscape: "풍경",
    photo: "사진",
    abstract: "추상",
    oriental: "동양화",
    sacred: "성화",
    plant: "식물",
    animal: "동물",
    drawing: "드로잉",
    poster: "포스터",
  },
  EN: {
    mypage: "My Page",
    recentViewed: "Recently Viewed",
    updateInfo: "Update Info",
    coupon: "Coupons",
    cart: "Cart",
    logout: "Logout",
    login: "Login",
    signup: "Sign Up",
    promotion: "Promotion",
    signature: "Signature",
    original: "Original",
    artist: "Artist",
    business: "Business",
    review: "Review",
    faq: "FAQ",
    all: "All",
    person: "Person",
    landscape: "Landscape",
    photo: "Photo",
    abstract: "Abstract",
    oriental: "Oriental",
    sacred: "Sacred",
    plant: "Plant",
    animal: "Animal",
    drawing: "Drawing",
    poster: "Poster",
  },
};

function Header({ isLoggedIn, onLogout }) {
  const [showSignatureMenu, setShowSignatureMenu] = useState(false);
  const [showOriginalMenu, setShowOriginalMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileSignatureMenu, setShowMobileSignatureMenu] = useState(false);
  const [showMobileOriginalMenu, setShowMobileOriginalMenu] = useState(false);
  const navigate = useNavigate();
  const { language, toggleLanguage } = useLanguage(); // Use language context

  const handleNavigate = (path) => {
    navigate(path);
    setShowMobileMenu(false); // Close mobile menu after navigation
  };

  const handleMyPageNavigate = (section) => {
    navigate(`/mypage/${section}`);
    setShowMobileMenu(false); // Close mobile menu after navigation
  };

  const signatureItems = [
    translations[language].all,
    translations[language].person,
    translations[language].landscape,
    translations[language].photo,
    translations[language].abstract,
    translations[language].oriental,
    translations[language].sacred,
    translations[language].plant,
    translations[language].animal,
    translations[language].drawing,
    translations[language].poster,
  ];

  const originalItems = [
    translations[language].all,
    translations[language].person,
    translations[language].landscape,
    translations[language].abstract,
  ];

  return (
    <header className={styles.header}>
      <section className={styles.headerTop}>
        <h1 onClick={() => handleNavigate("/")}>ARTKO</h1>
        <input
          className={`${styles.searchInput} ${styles.desktopOnly}`}
          placeholder="아티스트, 장르, 테마, 스타일 등을 입력해보세요"
        />
        <nav className={styles.headerLinks}>
          <span onClick={() => handleNavigate("/checkout")}>
            <PiShoppingCart />
          </span>
          {isLoggedIn ? (
            <>
              <span
                className={styles.desktopOnly}
                onClick={() => handleNavigate("/mypage")}
              >
                {translations[language].mypage}
              </span>
              <span
                onClick={onLogout}
                className={`${styles.logoutButton} ${styles.desktopOnly}`}
              >
                {translations[language].logout}
              </span>
            </>
          ) : (
            <span
              className={styles.desktopOnly}
              onClick={() => handleNavigate("/login")}
            >
              {translations[language].login}
            </span>
          )}
          {!isLoggedIn && (
            <span
              className={styles.desktopOnly}
              onClick={() => handleNavigate("/signup")}
            >
              {translations[language].signup}
            </span>
          )}
          <span className={styles.desktopOnly} onClick={toggleLanguage}>
            KR / EN
          </span>
          <span
            className={styles.mobileOnly}
            onClick={() => handleNavigate("/search")}
          >
            <FaSearch />
          </span>
        </nav>
        <div
          className={styles.hamburgerMenu}
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <FaBars /> : <FaBars />}
        </div>
      </section>
      <section className={styles.headerBottom}>
        <span onClick={() => handleNavigate("/promotion")}>
          <span className={styles.link}>
            {translations[language].promotion}
          </span>
        </span>
        <span
          onMouseEnter={() => setShowSignatureMenu(true)}
          onMouseLeave={() => setShowSignatureMenu(false)}
        >
          <span
            onClick={() => handleNavigate("/signature")}
            className={styles.link}
          >
            {translations[language].signature}
          </span>
          <div
            className={`${styles.dropdownMenu} ${
              showSignatureMenu ? styles.show : ""
            }`}
          >
            {signatureItems.map((item, i) => (
              <div className={styles.dropdownItem} key={i}>
                <div className={styles.dropdownBox}></div>
                <span onClick={() => handleNavigate("/signature")}>{item}</span>
              </div>
            ))}
          </div>
        </span>
        <span
          onMouseEnter={() => setShowOriginalMenu(true)}
          onMouseLeave={() => setShowOriginalMenu(false)}
        >
          <span
            onClick={() => handleNavigate("/original")}
            className={styles.link}
          >
            {translations[language].original}
          </span>
          <div
            className={`${styles.dropdownMenu} ${
              showOriginalMenu ? styles.show : ""
            }`}
          >
            {originalItems.map((item, i) => (
              <div className={styles.dropdownItem} key={i}>
                <div className={styles.dropdownBox}></div>
                <span onClick={() => handleNavigate("/original")}>{item}</span>
              </div>
            ))}
          </div>
        </span>
        <span className={styles.separator}>|</span>
        <span onClick={() => handleNavigate("/artist")} className={styles.link}>
          {translations[language].artist}
        </span>
        <span
          onClick={() => handleNavigate("/business")}
          className={styles.link}
        >
          {translations[language].business}
        </span>
        <span onClick={() => handleNavigate("/review")} className={styles.link}>
          {translations[language].review}
        </span>
        <span onClick={() => handleNavigate("/faq")} className={styles.link}>
          {translations[language].faq}
        </span>
      </section>
      {showMobileMenu && (
        <section className={`${styles.mobileMenu} ${styles.show}`}>
          <div className={styles.mobileMenuHeader}>
            <span onClick={() => handleNavigate("/login")}>
              {translations[language].login}
            </span>
            |
            <span onClick={() => handleNavigate("/signup")}>
              {translations[language].signup}
            </span>
            <span
              className={styles.closeButton}
              onClick={() => setShowMobileMenu(false)}
            >
              <FaTimes />
            </span>
          </div>
          <nav className={styles.mobileMenuLinks}>
            <span onClick={() => handleNavigate("/promotion")}>
              {translations[language].promotion}
            </span>
            <span
              onClick={() =>
                setShowMobileSignatureMenu(!showMobileSignatureMenu)
              }
            >
              {translations[language].signature}
              {showMobileSignatureMenu ? "∧" : "∨"}
            </span>
            {showMobileSignatureMenu &&
              signatureItems.map((item, i) => (
                <span
                  className={styles.mobileDropdownItem}
                  key={i}
                  onClick={() => handleNavigate("/signature")}
                >
                  {item}
                </span>
              ))}
            <span
              onClick={() => setShowMobileOriginalMenu(!showMobileOriginalMenu)}
            >
              {translations[language].original}
              {showMobileOriginalMenu ? "∧" : "∨"}
            </span>
            {showMobileOriginalMenu &&
              originalItems.map((item, i) => (
                <span
                  className={styles.mobileDropdownItem}
                  key={i}
                  onClick={() => handleNavigate("/original")}
                >
                  {item}
                </span>
              ))}
            <span onClick={() => handleNavigate("/artist")}>
              {translations[language].artist}
            </span>
            <span onClick={() => handleNavigate("/business")}>
              {translations[language].business}
            </span>
            <span onClick={() => handleNavigate("/review")}>
              {translations[language].review}
            </span>
            <span onClick={() => handleNavigate("/faq")}>
              {translations[language].faq}
            </span>
            {isLoggedIn && (
              <>
                <span onClick={() => handleMyPageNavigate("recentViewed")}>
                  {translations[language].recentViewed}
                </span>
                <span onClick={() => handleMyPageNavigate("updateInfo")}>
                  {translations[language].updateInfo}
                </span>
                <span onClick={() => handleMyPageNavigate("coupon")}>
                  {translations[language].coupon}
                </span>
                <span onClick={() => handleNavigate("/checkout")}>
                  {translations[language].cart}
                </span>
              </>
            )}
            <span className={styles.languageToggle} onClick={toggleLanguage}>
              KR / EN
            </span>
          </nav>
        </section>
      )}
      <div className={`${styles.mobileBottomBar} ${styles.mobileOnly}`}>
        <span
          onClick={() => handleNavigate("/promotion")}
          className={styles.link}
        >
          {translations[language].promotion}
        </span>
        <span
          onClick={() => handleNavigate("/signature")}
          className={styles.link}
        >
          {translations[language].signature}
        </span>
        <span
          onClick={() => handleNavigate("/original")}
          className={styles.link}
        >
          {translations[language].original}
        </span>
        <span onClick={() => handleNavigate("/artist")} className={styles.link}>
          {translations[language].artist}
        </span>
        <span
          onClick={() => handleNavigate("/business")}
          className={styles.link}
        >
          {translations[language].business}
        </span>
      </div>
    </header>
  );
}

export default Header;
