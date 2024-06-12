import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../css/Header.module.css";

function Header({ isLoggedIn, onLogout }) {
  const [showSignatureMenu, setShowSignatureMenu] = useState(false);
  const [showOriginalMenu, setShowOriginalMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      navigate(`/search-results?query=${searchTerm}`);
    }
  };

  const getLinkClass = (path) => {
    return location.pathname.startsWith(path)
      ? `${styles.active} ${styles.link}`
      : styles.link;
  };

  const toggleSignatureMenu = () => {
    setShowSignatureMenu(!showSignatureMenu);
    if (window.innerWidth <= 768) {
      navigate("/signature"); // 모바일에서만 이동
    }
  };

  const toggleOriginalMenu = () => {
    setShowOriginalMenu(!showOriginalMenu);
    if (window.innerWidth <= 768) {
      navigate("/original"); // 모바일에서만 이동
    }
  };

  return (
    <header className={styles.header}>
      <section className={styles.headerTop}>
        <Link to="/">
          <h1>ARTKO</h1>
        </Link>
        <nav className={styles.headerLinks}>
          {isLoggedIn ? (
            <>
              <span>
                <Link to="/mypage">마이페이지</Link>
              </span>
              <span onClick={onLogout} className={styles.logoutButton}>
                로그아웃
              </span>
            </>
          ) : (
            <span>
              <Link to="/login">로그인</Link>
            </span>
          )}
          <span>
            <Link to="/signup">회원가입</Link>
          </span>
          <span>KR/EN</span>
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
            프로모션
          </Link>
        </span>
        <span
          onMouseEnter={() => setShowSignatureMenu(true)}
          onMouseLeave={() => setShowSignatureMenu(false)}
        >
          <Link to="/signature" className={getLinkClass("/signature")}>
            시그니처
          </Link>
          {showSignatureMenu && (
            <div className={`${styles.dropdownMenu} ${styles.signatureMenu}`}>
              {[
                "전체",
                "인물",
                "풍경",
                "사진",
                "추상",
                "동양화",
                "성화",
                "식물",
                "동물",
                "드로잉",
                "포스터",
              ].map((item) => (
                <div className={styles.dropdownItem} key={item}>
                  <div className={styles.dropdownBox}></div>
                  <Link to={`/${item}`}>{item}</Link>
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
            오리지널
          </Link>
          {showOriginalMenu && (
            <div className={styles.dropdownMenu}>
              {["전체", "인물", "풍경", "추상"].map((item) => (
                <div className={styles.dropdownItem} key={item}>
                  <div className={styles.dropdownBox}></div>
                  <Link to={`/${item}`}>{item}</Link>
                </div>
              ))}
            </div>
          )}
        </span>
        <span className={styles.separator}>|</span>
        <Link to="/artist" className={getLinkClass("/artist")}>
          아티스트
        </Link>
        <Link to="/business" className={getLinkClass("/business")}>
          비즈니스
        </Link>
        <Link to="/review" className={getLinkClass("/review")}>
          리뷰
        </Link>
        <Link to="/faq" className={getLinkClass("/faq")}>
          FAQ
        </Link>
      </section>
      {showMobileMenu && (
        <section className={`${styles.mobileMenu} ${styles.show}`}>
          <nav className={styles.mobileMenuLinks}>
            {isLoggedIn ? (
              <>
                <span>
                  <Link to="/mypage">마이페이지</Link>
                </span>
                <span onClick={onLogout} className={styles.logoutButton}>
                  로그아웃
                </span>
              </>
            ) : (
              <span>
                <Link to="/login">로그인</Link>
              </span>
            )}
            <span>
              <Link to="/signup">회원가입</Link>
            </span>
            <span>
              <Link to="/promotion">프로모션</Link>
            </span>
            <span>
              <div onClick={() => setShowSignatureMenu(!showSignatureMenu)}>
                시그니처 {showSignatureMenu ? "∧" : "∨"}
              </div>
              {showSignatureMenu && (
                <div>
                  {[
                    "전체",
                    "인물",
                    "풍경",
                    "사진",
                    "추상",
                    "동양화",
                    "성화",
                    "식물",
                    "동물",
                    "드로잉",
                    "포스터",
                  ].map((item) => (
                    <div key={item}>
                      <Link to={`/${item}`}>{item}</Link>
                    </div>
                  ))}
                </div>
              )}
            </span>
            <span>
              <div onClick={() => setShowOriginalMenu(!showOriginalMenu)}>
                오리지널 {showOriginalMenu ? "∧" : "∨"}
              </div>
              {showOriginalMenu && (
                <div>
                  {["전체", "인물", "풍경", "추상"].map((item) => (
                    <div key={item}>
                      <Link to={`/${item}`}>{item}</Link>
                    </div>
                  ))}
                </div>
              )}
            </span>
            <span>
              <Link to="/artist">아티스트</Link>
            </span>
            <span>
              <Link to="/business">비즈니스</Link>
            </span>
            <span>
              <Link to="/review">리뷰</Link>
            </span>
            <span>
              <Link to="/faq">FAQ</Link>
            </span>
            <span>KR/EN</span>
          </nav>
        </section>
      )}
    </header>
  );
}

export default Header;
