import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
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
        <Link to="/">
          <h1>ARTKO</h1>
        </Link>
        <nav className={styles.headerLinks}>
          {isLoggedIn ? (
            <>
              <span className={styles.desktopOnly}>
                <Link to="/mypage">{translations[language].mypage}</Link>
              </span>
              <span
                onClick={onLogout}
                className={`${styles.logoutButton} ${styles.desktopOnly}`}
              >
                {translations[language].logout}
              </span>
            </>
          ) : (
            <span className={styles.desktopOnly}>
              <Link to="/login">{translations[language].login}</Link>
            </span>
          )}
          <span className={styles.desktopOnly}>
            <Link to="/signup">{translations[language].signup}</Link>
          </span>
          <span className={styles.desktopOnly} onClick={toggleLanguage}>
            KR / EN
          </span>
          <span className={styles.mobileOnly}>
            <Link to="/search">
              <FaSearch />
            </Link>
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
        <span>
          <Link to="/promotion" className={getLinkClass("/promotion")}>
            {translations[language].promotion}
          </Link>
        </span>
        <span
          onMouseEnter={() => setShowSignatureMenu(true)}
          onMouseLeave={() => setShowSignatureMenu(false)}
        >
          <Link to="/signature" className={getLinkClass("/signature")}>
            {translations[language].signature}
          </Link>
          {showSignatureMenu && (
            <div className={`${styles.dropdownMenu} ${styles.signatureMenu}`}>
              {signatureItems.map((item, i) => (
                <div className={styles.dropdownItem} key={i}>
                  <div className={styles.dropdownBox}></div>
                  <Link to="/signature">{item}</Link>
                </div>
              ))}
            </div>
          )}
        </span>
        <span
          onMouseEnter={() => setShowOriginalMenu(true)}
          onMouseLeave={() => setShowOriginalMenu(false)}
        >
          <Link to="/original" className={getLinkClass("/original")}>
            {translations[language].original}
          </Link>
          {showOriginalMenu && (
            <div className={styles.dropdownMenu}>
              {originalItems.map((item, i) => (
                <div className={styles.dropdownItem} key={i}>
                  <div className={styles.dropdownBox}></div>
                  <Link to="/original">{item}</Link>
                </div>
              ))}
            </div>
          )}
        </span>
        <span className={styles.separator}>|</span>
        <Link to="/artist" className={getLinkClass("/artist")}>
          {translations[language].artist}
        </Link>
        <Link to="/business" className={getLinkClass("/business")}>
          {translations[language].business}
        </Link>
        <Link to="/review" className={getLinkClass("/review")}>
          {translations[language].review}
        </Link>
        <Link to="/faq" className={getLinkClass("/faq")}>
          {translations[language].faq}
        </Link>
      </section>
      {showMobileMenu && (
        <section className={`${styles.mobileMenu} ${styles.show}`}>
          <nav className={styles.mobileMenuLinks}>
            {isLoggedIn ? (
              <>
                <span>
                  <Link to="/mypage">{translations[language].mypage}</Link>
                </span>
                <span onClick={onLogout} className={styles.logoutButton}>
                  {translations[language].logout}
                </span>
              </>
            ) : (
              <span>
                <Link to="/login">{translations[language].login}</Link>
              </span>
            )}
            <span>
              <Link to="/signup">{translations[language].signup}</Link>
            </span>
            <span>
              <Link to="/promotion">{translations[language].promotion}</Link>
            </span>
            <span>
              <div onClick={() => setShowSignatureMenu(!showSignatureMenu)}>
                {translations[language].signature}{" "}
                {showSignatureMenu ? "∧" : "∨"}
              </div>
              {showSignatureMenu && (
                <div>
                  {signatureItems.map((item, i) => (
                    <div key={i}>
                      <Link to="/signature">{item}</Link>
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
                    <div key={i}>
                      <Link to="/original">{item}</Link>
                    </div>
                  ))}
                </div>
              )}
            </span>
            <span>
              <Link to="/artist">{translations[language].artist}</Link>
            </span>
            <span>
              <Link to="/business">{translations[language].business}</Link>
            </span>
            <span>
              <Link to="/review">{translations[language].review}</Link>
            </span>
            <span>
              <Link to="/faq">{translations[language].faq}</Link>
            </span>
            <span onClick={toggleLanguage}>KR / EN</span>
          </nav>
        </section>
      )}
    </header>
  );
}

export default Header;
