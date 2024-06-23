import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { PiShoppingCart } from "react-icons/pi";
import styles from "../css/Header.module.css";
import { useLanguage } from "./LanguageContext";

const translations = {
  KR: {
    mypage: "마이페이지",
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
  const navigate = useNavigate();
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage(); // Use language context

  const getLinkClass = (path) => {
    return location.pathname.startsWith(path)
      ? `${styles.active} ${styles.link}`
      : styles.link;
  };

  const handleNavigate = (path) => {
    navigate(path);
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
        <nav className={styles.headerLinks}>
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
          <span
            className={styles.desktopOnly}
            onClick={() => handleNavigate("/signup")}
          >
            {translations[language].signup}
          </span>
          <span className={styles.desktopOnly} onClick={toggleLanguage}>
            KR / EN
          </span>
          <span
            className={styles.mobileOnly}
            onClick={() => handleNavigate("/search")}
          >
            <FaSearch />
          </span>
          <span onClick={() => handleNavigate("/search")}>
            <PiShoppingCart />
          </span>
        </nav>
        <div
          className={styles.hamburgerMenu}
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <FaTimes /> : <FaBars />}
        </div>
      </section>
      <section className={styles.headerBottom}>
        <span onClick={() => handleNavigate("/promotion")}>
          <span className={getLinkClass("/promotion")}>
            {translations[language].promotion}
          </span>
        </span>
        <span
          onMouseEnter={() => setShowSignatureMenu(true)}
          onMouseLeave={() => setShowSignatureMenu(false)}
        >
          <span
            onClick={() => handleNavigate("/signature")}
            className={getLinkClass("/signature")}
          >
            {translations[language].signature}
          </span>
          {showSignatureMenu && (
            <div className={`${styles.dropdownMenu} ${styles.signatureMenu}`}>
              {signatureItems.map((item, i) => (
                <div className={styles.dropdownItem} key={i}>
                  <div className={styles.dropdownBox}></div>
                  <span onClick={() => handleNavigate("/signature")}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          )}
        </span>
        <span
          onMouseEnter={() => setShowOriginalMenu(true)}
          onMouseLeave={() => setShowOriginalMenu(false)}
        >
          <span
            onClick={() => handleNavigate("/original")}
            className={getLinkClass("/original")}
          >
            {translations[language].original}
          </span>
          {showOriginalMenu && (
            <div className={styles.dropdownMenu}>
              {originalItems.map((item, i) => (
                <div className={styles.dropdownItem} key={i}>
                  <div className={styles.dropdownBox}></div>
                  <span onClick={() => handleNavigate("/original")}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          )}
        </span>
        <span className={styles.separator}>|</span>
        <span
          onClick={() => handleNavigate("/artist")}
          className={getLinkClass("/artist")}
        >
          {translations[language].artist}
        </span>
        <span
          onClick={() => handleNavigate("/business")}
          className={getLinkClass("/business")}
        >
          {translations[language].business}
        </span>
        <span
          onClick={() => handleNavigate("/review")}
          className={getLinkClass("/review")}
        >
          {translations[language].review}
        </span>
        <span
          onClick={() => handleNavigate("/faq")}
          className={getLinkClass("/faq")}
        >
          {translations[language].faq}
        </span>
      </section>
      {showMobileMenu && (
        <section className={`${styles.mobileMenu} ${styles.show}`}>
          <nav className={styles.mobileMenuLinks}>
            {isLoggedIn ? (
              <>
                <span onClick={() => handleNavigate("/mypage")}>
                  {translations[language].mypage}
                </span>
                <span onClick={onLogout} className={styles.logoutButton}>
                  {translations[language].logout}
                </span>
              </>
            ) : (
              <span onClick={() => handleNavigate("/login")}>
                {translations[language].login}
              </span>
            )}
            <span onClick={() => handleNavigate("/signup")}>
              {translations[language].signup}
            </span>
            <span onClick={() => handleNavigate("/promotion")}>
              {translations[language].promotion}
            </span>
            <span>
              <div onClick={() => setShowSignatureMenu(!showSignatureMenu)}>
                {translations[language].signature}{" "}
                {showSignatureMenu ? "∧" : "∨"}
              </div>
              {showSignatureMenu && (
                <div>
                  {signatureItems.map((item, i) => (
                    <div key={i} onClick={() => handleNavigate("/signature")}>
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </span>
            <span>
              <div onClick={() => setShowOriginalMenu(!showOriginalMenu)}>
                {translations[language].original} {showOriginalMenu ? "∧" : "∨"}
              </div>
              {showOriginalMenu && (
                <div>
                  {originalItems.map((item, i) => (
                    <div key={i} onClick={() => handleNavigate("/original")}>
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </span>
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
            <span onClick={toggleLanguage}>KR / EN</span>
          </nav>
        </section>
      )}
      <div className={`${styles.mobileBottomBar} ${styles.mobileOnly}`}>
        <span
          onClick={() => handleNavigate("/promotion")}
          className={getLinkClass("/promotion")}
        >
          {translations[language].promotion}
        </span>
        <span
          onClick={() => handleNavigate("/signature")}
          className={getLinkClass("/signature")}
        >
          {translations[language].signature}
        </span>
        <span
          onClick={() => handleNavigate("/original")}
          className={getLinkClass("/original")}
        >
          {translations[language].original}
        </span>
        <span
          onClick={() => handleNavigate("/artist")}
          className={getLinkClass("/artist")}
        >
          {translations[language].artist}
        </span>
        <span
          onClick={() => handleNavigate("/business")}
          className={getLinkClass("/business")}
        >
          {translations[language].business}
        </span>
      </div>
    </header>
  );
}

export default Header;
